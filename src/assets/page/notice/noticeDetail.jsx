import "./noticeStyle.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Subnav from "../../component/common/Subnav";
import Btn from "../../component/common/button/btn";
import { editNotiContext, noticeContext } from "../../../App";
import SubHead from "../../component/common/Subhead";

export default function NoticeDetail() {
  const { id } = useParams();
  const datas = useContext(noticeContext).reverse()
  const { editNoti, removeNoti } = useContext(editNotiContext);
  const [onUpdate, setOnUpdate] = useState(true);
  const [editNotis, setEditNotis] = useState({
    id: datas[id].id,
    notiType: datas[id].notiType,
    name: datas[id].name,
    text: datas[id].text,
  });

  const navigate = useNavigate();

  // 수정
  function editBtn() {
    setOnUpdate(!onUpdate);
    setEditNotis({
      id: datas[id].id,
      notiType: datas[id].notiType,
      name: datas[id].name,
      text: datas[id].text,
    })
  }
  // 수정취소
  function cancleBtn() {
    if (window.confirm(`수정을 취소 하시겠습니까?`)) {
      setOnUpdate(!onUpdate);
      navigate(`/detail/${editNotis[id].id}`)
    }
  }
  // 목록으로
  function listBtn() {
    history.back();
  }

  function editChange(e) {
    const { name, value } = e.target;

    setEditNotis({
      ...editNotis,
      [name]: value,
    });
  }



  console.log(id)
  //삭제
  function removeDetail() {
    if (window.confirm(`게시물을 삭제 하시겠습니까?`)) {
      removeNoti(datas[id].id);
      setEditNotis({
        id: "",
        notiType: "",
        name: "",
        text: "",
      });
      navigate("/noticeList");
    }
  }

  //저장
  function saveDetail() {
    if (window.confirm(`수정사항을 저장 하시겠습니까?`)) {
      let types
      if (editNotis.notiType === null || editNotis.notiType === '' || editNotis.notiType === undefined) {
        types = "공지사항";
      } else {
        types = editNotis.notiType;
      }
      editNoti(editNotis.id, types, editNotis.name, editNotis.text);
      console.log(types);
      // navigate("/noticeList");
    }
  }

  const editbtns = {
    tit: "수정",
    link: "",
    Bclass: "whiteBtn",
  };
  const removebtns = {
    tit: "삭제",
    link: "",
    Bclass: "whiteBtn",
  };
  const listbtns = {
    tit: "목록",
    link: "",
    Bclass: "blueBtn",
  };
  const canclebtns = {
    tit: "취소",
    link: "",
    Bclass: "whiteBtn",
  };
  const savebtns = {
    tit: "저장",
    link: "",
    Bclass: "blueBtn",
  };

  return (
    <>
    <SubHead/>
     <section className="w1440 flex pa55 noticeDetailWrap">
      <Subnav tit={"알림나무"} />
      <div className="noticeDetail">
        <h2 className="subtit">공지사항 & 이벤트</h2>
        {onUpdate ? (
          <div>
            <h3>[{datas[id].notiType}] {datas[id].name}</h3>
            <ul className="flex">
              <li>등록일</li>
              <li>{datas[id].createDate}</li>
              <li>조회수</li>
              <li>{datas[id].views}</li>
            </ul>
            <p>{datas[id].text}</p>
          </div>
        ) : (
          <div className="noticeWriteText">
            <div className="flex">
              <select
                name="notiType"
                value={editNotis.notiType}
                onChange={editChange}
              >
                <option value={"공지사항"}>공지사항</option>
                <option value={"이벤트"}>이벤트</option>
              </select>
              <input
                type="text"
                name="name"
                value={editNotis.name}
                onChange={editChange}
              />
            </div>
            <textarea
              name="text"
              value={editNotis.text}
              onChange={editChange}
            ></textarea>
          </div>
        )}
        {onUpdate ? (
          <div className="flex detailBtnWrap">
            <div className="flex">
              <Btn {...editbtns} func={editBtn} />
              <Btn {...removebtns} func={removeDetail} />
            </div>
            <Btn {...listbtns} func={listBtn} />
          </div>
        ) : (
          <div className="flex detailBtnWrap">
            <Btn {...canclebtns} func={cancleBtn} />
            <Btn {...savebtns} func={saveDetail} />
          </div>
        )}
      </div>
    </section>
    </>
  );
}
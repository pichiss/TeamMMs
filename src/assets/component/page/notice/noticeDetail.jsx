import "./noticeStyle.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useReducer, useState } from "react";
import { Contents, notiReducer } from "./noticeData";
import Subnav from "../../common/Subnav";
import Btn from "./btn";
import { editNotiContext } from "../../../../App";

export default function NoticeDetail() {
  const { id } = useParams()
  const {editNoti, removeNoti} = useContext(editNotiContext)
  const [state, dispatch] = useReducer(notiReducer, Contents);
  const { datas } = state;
  const [onUpdate, setOnUpdate] = useState(true);
  const [editNotiType, setEditNotiType] = useState(notiType)
  const [editNotiName, setEditNotiName] = useState(name)
  const [editNotiText, setEditNotiText] = useState(text)
  const navigate = useNavigate()

  // 수정
  function editBtn() {
    setOnUpdate(!onUpdate);
  }
  // 취소
  function cancleBtn() {
    if (window.confirm(`수정을 취소 하시겠습니까?`)) {
      setOnUpdate(!onUpdate);
    }
  }
  // 수정취소
  function listBtn() {
    history.back()
  }

  function editChange(e) {
    setEditNotiType(e.target.value)
    setEditNotiName(e.target.value)
    setEditNotiText(e.target.value)
    
  }

  //삭제
  function removeDetail() {
    removeNoti(id)
  }
  
  //저장
  function saveDetail() {
    editNoti(id, editNotis)
    navigate('/noticeList')
  }

  const editbtns = {
    tit: "수정",
    link: "",
    Bclass: "editBtn",
  };
  const removebtns = {
    tit: "삭제",
    link: "",
    Bclass: "removeBtn",
  };
  const listbtns = {
    tit: "목록",
    link: "",
    Bclass: "listBtn",
  };
  const canclebtns = {
    tit: "취소",
    link: "",
    Bclass: "removeBtn",
  };
  const savebtns = {
    tit: "저장",
    link: "",
    Bclass: "listBtn",
  };

  return (
    <section className="w1440 flex pa55 noticeDetailWrap">
      <Subnav tit={"알림나무"} />
      <div className="noticeDetail">
        <h2 className="subtit">공지사항 & 이벤트</h2>
        {onUpdate ? (
          <div>
            <h3>{datas[id].name}</h3>
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
              <select name="notiType" value={editNotiType.notiType} onChange={editChange}>
                <option value={"공지사항"}>공지사항</option>
                <option value={"이벤트"}>이벤트</option>
              </select>
              <input type="text" name="name" value={editNotiName.name} onChange={editChange} />
            </div>
            <textarea name="text" value={editNotiText.text} onChange={editChange} ></textarea>
          </div>
        )}
        {onUpdate ? (
          <div className="flex detailBtnWrap">
            <div className="flex">
              <Btn {...editbtns} func={editBtn} />
              <Btn {...removebtns} func={removeDetail}/>
            </div>
            <Btn {...listbtns} func={listBtn} />
          </div>
        ) : (
          <div className="flex detailBtnWrap">
            <Btn {...canclebtns} func={cancleBtn} />
            <Btn {...savebtns} func={saveDetail}/>
          </div>
        )}
      </div>
    </section>
  );
}

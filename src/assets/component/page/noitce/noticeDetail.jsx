import "./noticeStyle.css";
import { useParams } from "react-router-dom";
import { useReducer, useState } from "react";
import { Contents, notiReducer } from "./noticeData";
import Subnav from "../../common/Subnav";
import Btn from "./btn";

export default function NoticeDetail() {
  const [state, dispatch] = useReducer(notiReducer, Contents);
  const { datas } = state;
  const { id } = useParams();

  const [onUpdate, setOnUpdate] = useState(true);

  function editBtn() {
    setOnUpdate(!onUpdate);
  }
  function cancleBtn() {
    if (window.confirm(`수정을 취소 하시겠습니까?`)) {
      setOnUpdate(!onUpdate);
    }
  }

  function listBtn(){
    history.back()
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
          <div>하하</div>
        )}
        {onUpdate ? (
          <div className="flex detailBtnWrap">
            <div className="flex">
              <div onClick={editBtn}>
                <Btn {...editbtns} />
              </div>
              <Btn {...removebtns} />
            </div>
            <div onClick={listBtn}>
            <Btn {...listbtns} />
            </div>
          </div>
        ) : (
          <div className="flex detailBtnWrap">
            <div onClick={cancleBtn}>
              <Btn {...canclebtns} />
            </div>
            <Btn {...savebtns} />
          </div>
        )}
      </div>
    </section>
  );
}

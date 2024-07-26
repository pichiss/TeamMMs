import "./noticeStyle.css";
import { useParams } from "react-router-dom";
import { useReducer, useState, useContext } from "react";
import { Contents, notiReducer } from '../noitce/noticeData';
import Subnav from "../../common/Subnav";
import Btn from "./btn";

export default function NoticeDetail({ removeNoti }) {

  const [state, dispatch] = useReducer(notiReducer, Contents);
  const { notis } = state;
  const { id } = useParams();

  const [onUpdate, setOnUpdate] = useState(true)
  const [edits, setEdits] = useState({
    id: notis.id,
    notiType: notis.notiType,
    notiName: notis.notiName,
    notiText: notis.notiText,
  })

  function editBtn() {
    setOnUpdate(!onUpdate)
  }

  function editChange(e) {
    setEditNotices(e.target.value)
  }

  function saveBtn() {
    if (window.confirm(`${notiType} 을/를 수정 하시겠습니까?`)) {
      editNoti(id, notiType, notiName, notiText)
      editBtn() //다시 리스트로 돌아가라
    }
  }

  function deleteBtn() {
    removeNoti(notis.id)
    setEdits({
      id: '',
      notiType: '',
      notiName: '',
      notiText: '',
    })

  }

  const btns1 = {
    tit: '수정',
    link: '',
    Bclass: 'editBtn',
  }
  const btns2 = {
    tit: '삭제',
    link: '/noticeList',
    Bclass: 'removeBtn',
  }
  const btns3 = {
    tit: '목록',
    link: '/noticeList',
    Bclass: 'listBtn'
  }


  return (
    <section className="w1440 flex pa55 noticeDetailWrap">
      <Subnav tit={'알림나무'} />
      <div className="noticeDetail">
        <h2 className="subtit">공지사항 & 이벤트</h2>
        <div>
          <h3>{notis[id].notiName}</h3>
          <ul className="flex">
            <li>등록일</li>
            <li>{notis[id].date}</li>
            <li>조회수</li>
            <li>{notis[id].views}</li>
          </ul>
          <p>{notis[id].notiText}</p>
        </div>
        <div className="flex detailBtnWrap">
          <div className="flex">
            <Btn {...btns1} />
            <Btn {...btns2} />
          </div>
          <Btn {...btns3} />
        </div>
      </div>
    </section>
  );
}

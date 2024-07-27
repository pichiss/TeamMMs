import "./noticeStyle.css";
import { useState, useContext } from "react";
import Subnav from "../../common/Subnav";
import Btn from "./btn";
import { editContext } from "../noticeInfo";

export default function NoticeDetail({id, type, text, createDate}) {

  const {removeNoti, editNoti} = useContext(editContext)
  const [onUpdate, setOnUpdate] = useState(true)
  const [editText, setEditText] = useState(text)

  function removeBtn(){
    removeNoti(id)
  }

  function editBtn(){
    setOnUpdate(!onUpdate)
  }

  function editChange(e){
    setEditText(e.target.value)
  }

  function saveBtn() {
    editNoti(id, editText)
    editBtn()
  }

  function cancleBtn(){
    setOnUpdate(!onUpdate)
  }

  const btns1 = {
    tit: '수정',
    link: '',
    Bclass: 'editBtn',
  }
  const btns2 = {
    tit: '삭제',
    link: '',
    Bclass: 'removeBtn',
  }
  const btns3 = {
    tit: '목록',
    link: '',
    Bclass: 'listBtn'
  }


  return (
    <section className="w1440 flex pa55 noticeDetailWrap">
      <Subnav tit={'알림나무'} />
      <div className="noticeDetail">
        <h2 className="subtit">공지사항 & 이벤트</h2>
        {onUpdate?   <div>
          <h3>{datas[id].name}</h3>
          <ul className="flex">
            <li>등록일</li>
            <li>{datas[id].createDate}</li>
            <li>조회수</li>
            <li>{datas[id].views}</li>
          </ul>
          <p>{datas[id].text}</p>
        </div>:
        <div>tt</div>
        }
        {onUpdate?  <div className="flex detailBtnWrap">
          <div className="flex">
            <div onClick={editBtn}>
            <Btn {...btns1} />
              </div>
            <Btn {...btns2} />
          </div>
          <Btn {...btns3} />
        </div>:
        <div>ㅎㅎ</div>}
      </div>
    </section>
  );
}

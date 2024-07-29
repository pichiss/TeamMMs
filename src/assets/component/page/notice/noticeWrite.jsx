import "./noticeStyle.css";
import Subnav from "../../common/Subnav";
import "./btnStyle.css";
import Btn from "./btn";
import { useContext } from "react";
import NoticeInput from "./noticeInput";
import { editNotiContext } from "../../../../App";
import { useNavigate } from "react-router-dom";


export default function NoticeWrite() {
  const navigate = useNavigate()

  const [{ notiType, name, text }, onChange, reset] = NoticeInput({
    notiType: '',
    name: '',
    text: ''
  })

  const { createNoti } = useContext(editNotiContext)

  function createBtn() {
    let types
    if (notiType === null || notiType === ''|| notiType === undefined ) {
      types = "공지사항" ;
    } else{
      types = notiType;
    }
    createNoti(types, name, text)
    reset()
    navigate('/noticeList')
  }

  const btns1 = {
    tit: "취소",
    link: "/noticeList",
    Bclass: "cancleBtn",
  };
  const btns2 = {
    tit: "저장",
    link: "",
    Bclass: "saveBtn",
  };

  return (
    <section className="w1440 flex pa55 noticeWriteWrap">
      <Subnav tit={"알림나무"} />
      <div className="noticeWrite">
        <h2 className="subtit">공지사항 & 이벤트</h2>
        <div className="noticeWriteText">
          <div className="flex">
            <select name="notiType" value={notiType} onChange={onChange}>
              <option value={"공지사항"}>공지사항</option>
              <option value={"이벤트"}>이벤트</option>
            </select>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="제목을 입력하세요." />
          </div>
          <textarea name="text" value={text} onChange={onChange} placeholder="내용을 입력하세요."></textarea>
        </div>
        <div className="flex noticeWriteBtnWrap">
          <Btn {...btns1} />
          <Btn {...btns2} func={createBtn} />
        </div>
      </div>
    </section>
  );
}

import "./noticeStyle.css";
import NoticeInput from "./inputHook";
import Subnav from "../../common/Subnav";
import Btn from "./btn";

import { useContext } from "react"
import { editContext } from "./noticeInfo";

export default function NoticeWrite() {

  const [{ notiType, notiName, notiText }, onChangeNoti, reset] = NoticeInput({
    notiType: '',
    notiName: '',
    notiText: ''
  })

  const {createNoti} = useContext(editContext)
  console.log('17'+createNoti)
  function createBtn(){
    let cate = notiType;
    createNoti(notiName, notiText, cate)
    reset()
    history.back()
  }

  const btns1 = {
    tit: '취소',
    link: '/TeamMMs/noticeList',
    Bclass: 'cancleBtn'
  }
  const btns2 = {
    tit: '저장',
    link: '',
    Bclass: 'saveBtn',
  }



  return (
    <section className="w1440 flex pa55">
      <Subnav />
      <div className="noticeWriteWrap">
        <h2 className="noticeTit">공지사항 & 이벤트</h2>
        <div>
          <select name="notiType" value={notiType} onChange={onChangeNoti}>
            <option value={"공지사항"}>공지사항</option>
            <option value={"이벤트"}>이벤트</option>
          </select>
          <input type="text" name="notiName" value={notiName} onChange={onChangeNoti} placeholder="제목을 입력하세요." />
        </div>
        <textarea name="notiText" value={notiText} onChange={onChangeNoti} placeholder="내용을 입력하세요."></textarea>
        <div className="flex noticeWriteBtnWrap">
          <Btn {...btns1} />
          <Btn {...btns2} />
        </div>
      </div>
    </section>
  );
}

import "./noticeStyle.css";
import Subnav from "../../common/Subnav";
import './btnStyle.css'
import Btn from "./btn";
import { useState, useCallback } from "react";

export default function NoticeWrite({ createNoti }) {


  const [inputs, setInputs] = useState({
    notiType: '',
    notiName: '',
    notiText: '',
  })

  const { notiType, notiName, notiText } = inputs;

  function onChangeNoti(e) {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const reset = useCallback(() => setInputs(inputs), [inputs])

  function createBtn() {
    createNoti(notiType, notiName, notiText)
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
    <section className="w1440 flex pa55 noticeWriteWrap">
      <Subnav tit={'알림나무'} />
      <div className="noticeWrite">
        <h2 className="noticeTit">공지사항 & 이벤트</h2>
        <div className="noticeWriteText">
          <div className="flex">
            <select name="notiType" value={notiType} onChange={onChangeNoti}>
              <option value={"공지사항"}>공지사항</option>
              <option value={"이벤트"}>이벤트</option>
            </select>
            <input type="text" name="notiName" value={notiName} onChange={onChangeNoti} placeholder="제목을 입력하세요." />
          </div>
          <textarea name="notiText" value={notiText} onChange={onChangeNoti} placeholder="내용을 입력하세요."></textarea>
        </div>
        <div className="flex noticeWriteBtnWrap">
          <Btn {...btns1} />
          <div onClick={createBtn} className={`${btns2.Bclass} boardBtn`}>{btns2.tit}</div>
        </div>
      </div>
    </section>
  );
}

import "./noticeStyle.css";
import NoticeInput from "./noticeInput";
import Subnav from "../../common/Subnav";
import "./btnStyle.css";
import Btn from "./btn";
import { useContext } from "react";
import { editContext } from "../noticeInfo";

export default function NoticeWrite() {

  const [{ type, name, text }, onChange, reset] = NoticeInput({
    type: "",
    name: "",
    text: "",
  });

  const {createNoti} = useContext(editContext)

  function createBtn() {
    createNoti(type, name, text);
    reset();
    history.back();
  };

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
            <select name="type" value={type} onChange={onChange}>
              <option value={"공지사항"}>공지사항</option>
              <option value={"이벤트"}>이벤트</option>
            </select>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="제목을 입력하세요." />
          </div>
          <textarea name="text" value={text}  onChange={onChange} placeholder="내용을 입력하세요."></textarea>
        </div>
        <div className="flex noticeWriteBtnWrap">
          <Btn {...btns1} />
          <div onClick={createBtn} className={`${btns2.Bclass} boardBtn`}>{btns2.tit}</div>
        </div>
      </div>
    </section>
  );
}

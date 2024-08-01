import "./eduQuestionStyle.css";
import { useRef, useState } from "react";
import Btn from "../../common/button/btn";
import { AskIcon } from "../../../img/img";
import { CloseAsk } from "../../../img/img";

export default function EduQuestion({ Qclass }) {
  const askTextRef = useRef();

  const [openAskICon, setOpenAskIcon] = useState(true);

  function openAsk() {
    setOpenAskIcon(!openAskICon);
  }

  function askTeacher() {
    if (askTextRef.current.value < 10 || askTextRef.current.value == null || askTextRef.current.value === undefined) {
      alert('질문 내용은 10글자 이상으로 입력해주세요.')
      console.log(askTextRef.current.value)
     }
    else {
      alert(`질문이 완료되었습니다.`);
      setOpenAskIcon(!openAskICon);
    }
  }

  const asksBtn = {
    tit: "질문하기",
    link: "",
    Bclass: "asksBtn",
  };

  return (
    <>
      {openAskICon ? (
        <div className={`askIconWrap ${Qclass}`} onClick={openAsk}>
          <div className="askIcon">
            <img src={AskIcon} alt="질문하기" />
            <h3>질문하기</h3>
          </div>
        </div>
      ) : (
        <>
          <div className={`askIconWrap ${Qclass}`} onClick={openAsk}>
          <div className="askIcon">
            <img src={AskIcon} alt="질문하기" />
            <h3>질문하기</h3>
          </div>
        </div>
         <div className="askIconPopupWrap">
          <div className="askIconPopup">
            <div className="flex askIconPopupImg">
              <img src={CloseAsk} alt="닫기" onClick={openAsk} />
            </div>
            <h5>학습내용에 대해 궁금한 점이 있나요?</h5>
            <div className="flex askIconPopupText">
              <textarea
                ref={askTextRef}
                placeholder="질문을 적어주면, 선생님이 확인 후 답변해 주실거예요."
              ></textarea>
            </div>
            <div className="flex askIconPopupBtn">
              <Btn {...asksBtn} func={askTeacher} />
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}

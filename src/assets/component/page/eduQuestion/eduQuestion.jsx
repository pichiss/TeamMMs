import './eduQuestionStyle.css'
import { AskIcon } from '../../../img/img';

export default function EduQuestion({Qclass}) {
  
    return (
        <div className = {`askIconWrap ${Qclass}`}>
        <div className='askIcon'>
            <img src={AskIcon} alt="질문하기" />
            <h3>질문하기</h3>
        </div>
    </div>
    );
  }
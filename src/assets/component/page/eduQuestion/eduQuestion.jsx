import './eduQuestionStyle.css'
import { AskIcon } from '../../../img/img';
import { useState } from 'react';

export default function EduQuestion({ Qclass }) {

    const [openAskICon, setOpenAskIcon] = useState(true)

    function openAsk(){
        setOpenAskIcon(!openAskICon)
    }

    return (
        <>
            {openAskICon ?
                <div className={`askIconWrap ${Qclass}`} onClick={openAsk}>
                    <div className='askIcon'>
                        <img src={AskIcon} alt="질문하기" />
                        <h3>질문하기</h3>
                    </div>
                </div>
                :
                <div onClick={openAsk}>쿠헬헬</div>

        }
        </>
    );
}
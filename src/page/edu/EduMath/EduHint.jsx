import './EduMathQ.css'
import { useState } from 'react';
import { HintMon } from '../../../assets/img/img';
import bulb from '../../../assets/img/icon/bulb.png';


export default function EduHint({ hintText }) {

    // 힌트보기
    const [openHint, setOpenHint] = useState(true)
    function clickHint() {
        setOpenHint(!openHint)
    }

    return (
        <>
            <div className={openHint ? 'hintBubble' : 'hintBubble active'} onClick={clickHint}>
                <p>{hintText}</p>
                <img src={HintMon} alt="힌트몬스터" />
            </div>
            <div className='flex hintWrap' onClick={clickHint}>
                <img src={bulb} alt="hint-button" />
                <h3>힌트보기</h3>
            </div>
        </>
    )
}
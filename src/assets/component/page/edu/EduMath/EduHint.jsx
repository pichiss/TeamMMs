import './EduMathQ.css'
import { useState } from 'react';
import { HintMon } from '../../../../img/img';
import bulb from '../../../../img/icon/bulb.png';


export default function EduHint({hintText}) {

    // 힌트보기
    const [openHint, setOpenHint] = useState(true)
    function clickHint() {
        setOpenHint(!openHint)
    }

    return (
        <>
            {openHint ?
                <div className='flex hintWrap' onClick={clickHint}>
                    <img src={bulb} alt="hint-button" />
                    <h3>힌트보기</h3>
                </div> :
                <>
                    <div className={'hintBubble'} onClick={clickHint}>
                        <p>{hintText}</p>
                        <img src={HintMon} alt="힌트몬스터" />
                    </div>
                    <div className='flex hintWrap' onClick={clickHint}>
                        <img src={bulb} alt="hint-button" />
                        <h3>힌트보기</h3>
                    </div></>
            }
        </>
    )
}
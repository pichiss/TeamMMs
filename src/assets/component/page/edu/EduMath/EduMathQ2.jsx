import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

import EduHeader from '../../../header/EduHeader';
import EduMathBlock from './EduMathBlock1';
import EduFooter from '../../../footer/EduFooter';

import left_arrow from '../../../../img/icon/left-arrow.png';
import right_arrow from '../../../../img/icon/right-arrow.png';
import score_answer from '../../../../img/icon/score.png';
import score_wrong from '../../../../img/icon/score_wrong.png';
import ask from '../../../../img/icon/info.png';
import bulb from '../../../../img/icon/bulb.png';
import check from '../../../../img/icon/check-mark.png';
import spring from '../../../../img/note_spring.png';
import spin from '../../../../img/icon/spin_mark.png';
import close from '../../../../img/icon/x.png';

import EduQuestion from '../../../common/eduQuestion/eduQuestion';
import { HintMon } from '../../../../img/img';


import './EduMathQ.css';

function EduMathQ2({ setPage, user, point }) {

    const [onPopUp, setPopUp] = useState(false);

    function checkQ() {
        setPopUp(true)
    }

    function closeQ() {
        setPopUp(false)
    }

    const [onAnswer, setAnswer] = useState('');
    const [onTwoAnswer, setTwoAnswer] = useState('');
    const [onScore, setScore] = useState(null);

    function saveAnswer(e) {
        setAnswer(e.target.value);
    }

    function saveAnswerTwo(e) {
        setTwoAnswer(e.target.value)
    }

    function answerQ() {
        if (onAnswer == 12 && onTwoAnswer == 8) {
            setScore(true)
        } else {
            setScore(false)
        }
        setPopUp(false)
    }

    // 힌트보기
    const [openHint, setOpenHint] = useState(true)
    function clickHint() {
        setOpenHint(!openHint)
    }

    return (
        <section className='eduTodaySec'>
            <EduHeader setPage={setPage} user={user} point={point} />
            <div className='flex eduQBtn'>
                <div className="basicQ active">기초문제</div>
                <Link to={'/education/today/5/11'}>
                    <div className="deepQ">응용문제</div>
                </Link>
            </div>
            <article className='flex eduUnitWrap'>
                <div className='eduArrowWrap'>
                    <Link to={'/education/today/5/1'}>
                        <img src={left_arrow} alt="previous-button" className='eduLeftArrow' />
                    </Link>
                    <Link to={'/education/today/5/3'}>
                        <img src={right_arrow} alt="next-button" className='eduRightArrow' />
                    </Link>
                </div>
                <div className='eduUnitL'>
                    <img src={score_answer} alt="" className={'scoreAnswer ' + (onScore !== null && onScore === true ? 'on' : '')} />
                    <img src={score_wrong} alt="" className={'scoreWrong ' + (onScore !== null && onScore === false ? 'on' : '')} />
                    <h1>02. 다음 입체도형을 보고 모서리와 꼭짓점의 개수를 각각 작성하세요.</h1>
                    <Canvas
                        style={{ width: `980px`, height: `440px` }}
                        camera={{ fov: 75, near: 0.1, far: 100, position: [2, 2, 2] }}>
                        <EduMathBlock />
                    </Canvas>
                    <img src={spin} alt="spin-mark" className='eduSpin' />
                </div>
                <div className='flex eduUnitR'>
                    <div className='eduAnswer'>
                        <h1>모서리의 개수는?</h1>
                        <div className='flex'>
                            <input type="text" onChange={saveAnswer} value={onAnswer} />
                            <p>개</p>
                        </div>
                        <h1>꼭짓점의 개수는?</h1>
                        <div className='flex'>
                            <input type="text" onChange={saveAnswerTwo} value={onTwoAnswer} />
                            <p>개</p>
                        </div>
                    </div>
                    <div className='flex eduSubBtn'>
                        {/* <div className='flex eduAskWrap'>
                            <img src={ask} alt="ask-button" />
                            <h3>질문하기</h3>
                        </div> */}
                        <div className='EduQWrap'>
                        <EduQuestion />
                        </div>
                        {openHint ?
                            <div className='flex hintWrap' onClick={clickHint}>
                                <img src={bulb} alt="hint-button" />
                                <h3>힌트보기</h3>
                            </div> :
                            <>
                                <div className='hintBubble'  onClick={clickHint}>
                                    <p>도형을 돌려서 모서리와 꼭짓점의 개수를 하나씩 세어봐!</p>
                                    <img src={HintMon} alt="힌트몬스터" />
                                </div>
                                <div className='flex hintWrap' onClick={clickHint}>
                                    <img src={bulb} alt="hint-button" />
                                    <h3>힌트보기</h3>
                                </div></>
                        }
                        <div className='flex checkWrap' onClick={checkQ}>
                            <img src={check} alt="check-button" />
                            <h3>채점하기</h3>
                        </div>
                    </div>
                </div>
                <div className={'eduPopUp ' + (onPopUp ? 'on' : '')}>
                    <div className='flex eduCloseBtn' onClick={closeQ}>
                        <img src={close} alt="close-button" />
                    </div>
                    <h2>채점하시겠습니까?</h2>
                    <div className='flex eduPopBtn'>
                        <button className='eduCancleBtn' onClick={closeQ}>취소하기</button>
                        <button className='eduGradeBtn' onClick={answerQ}>채점하기</button>
                    </div>
                </div>
                <div className={'shadowBox ' + (onPopUp ? 'shadow' : '')}></div>
            </article>
            <EduFooter />
        </section>
    )
}

export default EduMathQ2;
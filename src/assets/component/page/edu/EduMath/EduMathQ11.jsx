import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

import EduHeader from '../EduHeader';
import EduMathBlock from './EduMathBlock2';
import EduFooter from '../EduFooter';

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

import './EduMathQ.css';

function EduMathQ11({setPage, user, point}){

    const [onPopUp, setPopUp] = useState(false);

    function checkQ(){
        setPopUp(true)
    }

    function closeQ(){
        setPopUp(false)
    }

    const [onAnswer, setAnswer] = useState('');
    const [onTwoAnswer, setTwoAnswer] = useState('');
    const [onScore, setScore] = useState(null);

    function saveAnswer(e){
        setAnswer(e.target.value);
    }

    function saveAnswerTwo(e){
        setTwoAnswer(e.target.value)
    }

    function answerQ(){
        if(onAnswer == 12 && onTwoAnswer == 60){
            setScore(true)
        }else{
            setScore(false)
        }
        setPopUp(false)
    }

    return(
        <section className='eduTodaySec'>
            <EduHeader setPage={setPage} user={user} point={point} />
            <div className='flex eduQBtn'>
                <Link to={'/education/today/5/1'}>
                    <div className="basicQ">기초문제</div>
                </Link>
                <div className="deepQ active">응용문제</div>
            </div>
            <article className='flex eduUnitWrap'>
                <div className='eduArrowWrap'>
                    <Link to={'/education/today/5/10'}>
                        <img src={left_arrow} alt="previous-button" className='eduLeftArrow' />
                    </Link>
                    <Link to={'/education/today/5/12'}>
                        <img src={right_arrow} alt="next-button" className='eduRightArrow' />
                    </Link>
                </div>
                <div className='eduUnitL'>
                    <img src={score_answer} alt="" className={'scoreAnswer ' + (onScore !== null && onScore === true ? 'on' : '')} />
                    <img src={score_wrong} alt="" className={'scoreWrong ' + (onScore !== null && onScore === false ? 'on' : '')} />
                    <h1>11. 한 변의 길이가 5cm인 정육면체를 보고 모서리의<br />개수와 길이의 합을 작성하세요.</h1>
                    <Canvas
                        style={{width: `980px`, height: `440px`}}
                        camera={{fov: 75, near: 0.1, far: 100, position: [1, 1, 1]}}>
                        <EduMathBlock />
                    </Canvas>
                    <img src={spin} alt="spin-mark" className='eduSpin' />
                </div>
                <img src={spring} alt="note-spring" />
                <div className='flex eduUnitR'>
                    <div className='eduAnswer'>
                        <h1>모서리의 개수는?</h1>
                        <div className='flex'>
                            <input type="text" onChange={saveAnswer} value={onAnswer} />
                            <p>개</p>
                        </div>
                        <h1>모서리의 길이의 합은?</h1>
                        <div className='flex'>
                            <input type="text" onChange={saveAnswerTwo} value={onTwoAnswer} />
                            <p>cm</p>
                        </div>
                    </div>
                    <div className='flex eduSubBtn'>
                        <div className='flex eduAskWrap'>
                            <img src={ask} alt="" />
                            <h3>질문하기</h3>
                        </div>
                        <div className='flex hintWrap'>
                            <img src={bulb} alt="" />
                            <h3>힌트보기</h3>
                        </div>
                        <div className='flex checkWrap' onClick={checkQ}>
                            <img src={check} alt="" />
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

export default EduMathQ11;
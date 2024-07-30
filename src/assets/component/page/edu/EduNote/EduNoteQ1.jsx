import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

import EduHeader from '../EduHeader';
import EduMathBlock from '../EduMath/EduMathBlock1';
import EduFooter from '../EduFooter';

import left_arrow from '../../../../img/icon/left-arrow2.png';
import right_arrow from '../../../../img/icon/right-arrow2.png';
import score_answer from '../../../../img/icon/score.png';
import score_wrong from '../../../../img/icon/score_wrong.png';
import ask from '../../../../img/icon/info.png';
import bulb from '../../../../img/icon/bulb.png';
import check from '../../../../img/icon/check-mark.png';
import spring from '../../../../img/note_spring.png';
import spin from '../../../../img/icon/spin_mark.png';
import commen from '../../../../img/icon/book.png';
import close from '../../../../img/icon/x.png';

import '../EduMath/EduMathQ.css'

function EduNoteQ1({setPage, user, point}){

    const [onPopUp, setPopUp] = useState(false);

    function checkQ(){
        setPopUp(true)
    }

    function closeQ(){
        setPopUp(false)
    }

    const [onAnswer, setAnswer] = useState('');
    const [onScore, setScore] = useState(null);

    function saveAnswer(e){
        setAnswer(e.target.value);
    }

    function answerQ(){
        if(onAnswer === '직육면체'){
            setScore(true)
        }else{
            setScore(false)
        }
        setPopUp(false)
    }

    return(
        <section className='eduNoteSec'>
            <EduHeader setPage={setPage} user={user} point={point} />
            <article className='flex eduUnitWrap'>
                <div className='eduArrowWrap'>
                    <img src={left_arrow} alt="previous-button" className='eduLeftArrow' />
                    <img src={right_arrow} alt="next-button" className='eduRightArrow' />
                </div>
                <div className='eduUnitL'>
                    <img src={score_answer} alt="" className={'scoreAnswer ' + (onScore !== null && onScore === true ? 'on' : '')} />
                    <img src={score_wrong} alt="" className={'scoreWrong ' + (onScore !== null && onScore === false ? 'on' : '')} />
                    <h1>01. 다음 입체도형의 이름을 작성하세요.</h1>
                    <Canvas
                        style={{width: `980px`, height: `500px`}}
                        camera={{fov: 75, near: 0.1, far: 100, position: [2, 2, 2]}}
                    >
                        <EduMathBlock />
                    </Canvas>
                    <img src={spin} alt="spin-mark" className='eduSpin' />
                </div>
                <img src={spring} alt="note-spring" />
                <div className='flex eduUnitR'>
                    <div className='eduAnswer'>
                        <h1>직사각형 6개로 둘러싸인 도형을 무엇이라고 하나요?</h1>
                        <input type="text" onChange={saveAnswer} value={onAnswer} />
                    </div>
                    <div className='flex eduSubBtn'>
                        <div className='flex eduAskWrap'>
                            <img src={ask} alt="ask-button" />
                            <h3>질문하기</h3>
                        </div>
                        <div className='flex hintWrap'>
                            <img src={bulb} alt="hint-button" />
                            <h3>힌트보기</h3>
                        </div>
                        {onScore == true || onScore == false ? 
                        <div className='flex commenWrap'>
                            <img src={commen} alt="commentary-button" />
                            <h3>해설보기</h3>
                        </div>
                        :
                        <div className='flex checkWrap' onClick={checkQ}>
                            <img src={check} alt="check-button" />
                            <h3>채점하기</h3>
                        </div>}
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

export default EduNoteQ1;
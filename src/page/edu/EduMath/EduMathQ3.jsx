import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

import EduHeader from '../EduHeader';
import EduMathBlock from './EduMathBlock2';
import EduFooter from '../EduFooter';

import left_arrow from '../../../assets/img/icon/left-arrow.png';
import right_arrow from '../../../assets/img/icon/right-arrow.png';
import score_answer from '../../../assets/img/icon/score.png';
import score_wrong from '../../../assets/img/icon/score_wrong.png';
import check from '../../../assets/img/icon/check-mark.png';
import spring from '../../../assets/img/note_spring.png';
import spin from '../../../assets/img/icon/spin_mark.png';
import close from '../../../assets/img/icon/x.png';

import './EduMathQ.css';
import EduQna from './EduQna';
import EduHint from './EduHint';

function EduMathQ3({ setPage, user, point, setHelpPop }) {

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
        if (onAnswer === '정육면체'){
            setScore(true)
        } else {
            setScore(false)
        }
        setPopUp(false)
    }

    function eduAlert(){
        alert("준비 중입니다.")
    }

    // 힌트보기
    const hintText = "이 도형은 6개의 면을 가지고 있고, 주사위처럼 생겼어.";

    return (
        <section className='eduTodaySec mathQ'>
            <EduHeader setPage={setPage} user={user} point={point} setHelpPop={setHelpPop}/>
            <div className='flex eduQBtn'>
                <div className="basicQ active">기초문제</div>
                <Link to={'/education/today/5/11'}>
                    <div className="deepQ">응용문제</div>
                </Link>
            </div>
            <article className='flex eduUnitWrap'>
                <div className='eduArrowWrap'>
                    <Link to={'/education/today/5/2'}>
                        <img src={left_arrow} alt="previous-button" className='eduLeftArrow' />
                    </Link>
                    <img src={right_arrow} alt="next-button" className='eduRightArrow' onClick={eduAlert} />
                </div>
                <div className='eduUnitL'>
                    <img src={score_answer} alt="circle-mark" className={'scoreAnswer ' + (onScore !== null && onScore === true ? 'on' : '')} />
                    <img src={score_wrong} alt="slash-mark" className={'scoreWrong ' + (onScore !== null && onScore === false ? 'on' : '')} />
                    <h1>03. 다음 입체도형의 이름을 작성하세요.</h1>
                    <Canvas
                        style={{ width: `100%`, height: `500px` }}
                        camera={{ fov: 75, near: 0.1, far: 100, position: [1, 1, 1] }}>
                        <EduMathBlock />
                    </Canvas>
                    <img src={spin} alt="spin-mark" className='eduSpin' />
                </div>
                <div className='flex eduUnitR'>
                    <div className='eduAnswer'>
                        <h1>정사각형 6개로 둘러싸인 도형을 무엇이라고 하나요?</h1>
                        <input type="text" onChange={saveAnswer} value={onAnswer} />
                    </div>
                    <div className='flex eduSubBtn'>
                        <EduQna/>
                        <EduHint hintText={hintText}/>
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
            <div className='eduPagenation'>3 / 10</div>
            <EduFooter />
        </section>
    )
}

export default EduMathQ3;
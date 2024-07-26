import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';

import EduHeader from '../EduHeader';
import EduMathBlock from './EduMathBlock2';
import EduFooter from '../EduFooter';

import left_arrow from '../../../../img/icon/left-arrow.png';
import right_arrow from '../../../../img/icon/right-arrow.png';
import ask from '../../../../img/icon/info.png';
import bulb from '../../../../img/icon/bulb.png';
import check from '../../../../img/icon/check-mark.png';
import spring from '../../../../img/note_spring.png';
import spin from '../../../../img/icon/spin_mark.png';

import './EduMathQ.css';

function EduMathQ2({setPage, user}){

    const [onBasic, setOnBasic] = useState(true);
    const [onDeepQ, setOnDeepQ] = useState(false);

    function onClickBasic(){
        setOnBasic(true)
        setOnDeepQ(false)
    }

    function onClickDeep(){
        setOnBasic(false)
        setOnDeepQ(true)
    }
    
    function checkQ(){
        confirm("채점하시겠습니까?")
    }

    return(
        <section className='eduTodaySec'>
            <EduHeader setPage={setPage} user={user} />
            <div className='flex eduQBtn'>
                <div className={onBasic ? "active" : " "} onClick={onClickBasic}>기초문제</div>
                <div className={onDeepQ ? "active" : " "} onClick={onClickDeep}>응용문제</div>
            </div>
            <article className='flex eduUnitWrap'>
                <div className='eduArrowWrap'>
                    <Link to={'/education/today/5/2'}>
                        <img src={left_arrow} alt="previous-button" className='eduLeftArrow' />
                    </Link>
                    <Link to={'/education/today/5/4'}>
                        <img src={right_arrow} alt="next-button" className='eduRightArrow' />
                    </Link>
                </div>
                <div className='eduUnitL'>
                    <h1>03. 다음 입체도형의 이름을 작성하세요.</h1>
                    <Canvas
                        style={{width: `980px`, height: `500px`}}
                        camera={{fov: 75, near: 0.1, far: 100, position: [1, 1, 1]}}>
                        <EduMathBlock />
                    </Canvas>
                    <img src={spin} alt="spin-mark" className='eduSpin' />
                </div>
                <img src={spring} alt="note-spring" />
                <div className='flex eduUnitR'>
                    <div className='eduAnswer'>
                        <h1>정사각형 6개로 둘러싸인 도형을 무엇이라고 하나요?</h1>
                        <input type="text" />
                    </div>
                    <div className='flex eduSubBtn'>
                        <div className='flex askWrap'>
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
                <div>{}</div>
            </article>
            <EduFooter />
        </section>
    )
}

export default EduMathQ2;
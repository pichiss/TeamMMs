import arrows from '../../../img/icon/arrows_blue.png'
import pro1 from '../../../img/pro1.png'
import pro2 from '../../../img/pro2.png'
import pro3 from '../../../img/pro3.png'
import pro4 from '../../../img/pro4.png'

function CatchSec5(){
    return(
        <div className='catchSec5'>
            <div className="mainBubble">
                <h1>캐치! 수학 몬스터즈 학습 프로세스</h1>
            </div>
            <div className="mainProcess">
                <ul>
                    <li className="mainpro">
                        <div className='sec4Tit'>
                            <p className="numberCircle">1</p> 
                            <span className="numberText">개념 이해하기</span>
                        </div>
                        <div>
                            <img src={pro1} alt='process1'/>
                        </div>
                        <div>
                            <p>개념이해를 도와주는 <span>동영상 강의</span></p>
                            <p>문제풀기 전에 동영상 강의를 듣고 기초 개념을 학습해보세요.</p>
                        </div>
                    </li>
                    <li className='processArrow'>
                        <img src={arrows} alt='arrows'/>
                    </li>
                    <li className="mainpro">
                        <div className='sec4Tit'>
                            <p className="numberCircle">2</p> 
                            <span className="numberText">개념 및 유형 익히기</span>
                        </div>
                        <div>
                            <img src={pro2} alt='process2'/>
                        </div>
                        <div>
                            <p>개념과 유형을 모두 잡는 <span>단계별 구성</span></p>
                            <p>기초 개념부터 마무리까지 정해진 구성을 따라 학습하면서 단원을 마스터해보세요.</p>
                        </div>
                    </li>
                    <li className="mainpro">
                        <div className='sec4Tit'>
                            <p className="numberCircle">3</p> 
                            <span className="numberText">틀린 문제 복습하기</span>
                        </div>
                        <div>
                            <img src={pro3} alt='process3'/>
                        </div>
                        <div>
                            <p>부족한 유형을 보완하는 <span>오답노트</span></p>
                            <p>매일매일 오답노트를 통해 부족한 유형을 보완해 보세요.</p>
                        </div>
                    </li>
                    <li className='processArrow'>
                        <img src={arrows} alt='arrows'/>
                    </li>
                    <li className="mainpro">
                        <div className='sec4Tit'>
                            <p className="numberCircle">4</p> 
                            <span className="numberText">학습 동기부여</span>
                        </div>
                        <div>
                            <img src={pro4} alt='process4'/>
                        </div>
                        <div>
                            <p>학습의 동기부여를 향상시키는 <span>포인트샵</span></p>
                            <p>문제를 풀 때마다 포인트가 쌓여요. 획득한 포인트로 원하는 상품과 교환해 보세요.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CatchSec5
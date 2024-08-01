import monster from '../../../assets/img/monster/main.png'

function Sec3(){

    return(
    <section className='mainSec3 w1440'>
        <div className="mainBubble">
            <h1>캐치! 수학 몬스터즈로 학습해야 하는 이유</h1>
        </div>
        <div className='mainReasons'>
            <ul className='sec3Reasons'>
                <li className='sec3Reason'>
                    <p className='numberCircle'>1</p>
                    <span className='numberText'>현재 학습 상태 진단 및 점검</span>
                </li>
                <li className='sec3Reason'>
                    <p className='numberCircle'>2</p>
                    <span className='numberText'>하루 30분 한 달이면 교과 과정 마스터</span>
                </li>
                <li className='sec3Reason'>
                    <p className='numberCircle'>3</p>
                    <span className='numberText'>자기 주도적 학습 습관 형성</span>
                </li>
                <li className='sec3Reason'>
                    <p className='numberCircle'>4</p>
                    <span className='numberText'>수학 공부에 자신감 형성</span>
                </li>
            </ul>
            <div className='reasonMonster'>
                <img src={monster} alt="monster"/>
            </div>
        </div>
    </section>
    )
}
export default Sec3;
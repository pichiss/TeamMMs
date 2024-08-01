import intro2 from '../../../img/intro2.png'

function CatchSec2(){
    return(
        <div className="catchSec2">
            <img src={intro2} alt='about page 2'/>
            <ul className='about2Tit1'>
                <li>초등 수학 이제 더 중요해 졌습니다.</li>
                <li>
                    입시 제도 변화에 따라 자사고, <br/>
                    특목고 진학이<br/>
                    대입에 유리하게 작용!
                </li>
            </ul>
            <ul className='about2Tit2'>
                <li>초등 수학 기초 부족은 중·고등수포자로 이어져</li>
                <li>
                    '수학 공부를 포기하는 원인’에 대한 수학교사들의 생각'
                </li>
            </ul>
            <ul className='about2Tit3'>
                <li>초등학생 3명 중 1명 스스로 수포자라고 생각</li>
                <li>
                    전국 수포자(수학 공부 포기 학생) 설문 조사결과
                </li>
            </ul>
        </div>
    )
}

export default CatchSec2
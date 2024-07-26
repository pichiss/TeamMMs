import intro1 from '../../../../img/intro1.png'

function CatchSec1(){
    return(
        <div className="catchSec1">
            <img src={intro1} alt='about page 1'/>
            <ul>
                <li className='aboutTit1'>수학 지금부터 하루 30분이면 충분해!</li>
                <li className='aboutTit2'>스스로 학습하는 수학 공부</li>
                <li className='aboutTit3'>
                    <span>캐치! </span>
                    <span>수학 </span>
                    <span>몬스터즈</span>
                </li>
            </ul>
        </div>
    )
}

export default CatchSec1
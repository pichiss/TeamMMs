import { Link } from 'react-router-dom';
import arrow from '../../../assets/img/icon/arrow-white.png'

function CatchSec6(){
    return(
        <div className='catchSec6'>
            <div className="catchBubble">
                <h1>캐치! 수학 몬스터즈 이용권</h1>
            </div>
            <div className='about6tit1'>
                <ul>
                    <li>월간 이용권</li>
                    <li>
                        <p>매달 1개월 구독료가 정기결제됩니다.</p>
                        <p><span className='about6Line'>일주일 무료 </span>이후 월 10,000원 결제</p>
                    </li>
                </ul>
                <ul>
                    <li>3개월 이용권</li>
                    <li>
                        <p>3개월 구독료가 한번에 결제됩니다.</p>
                        <p><span className='about6Line'>30,000원</span> 27,000원 결제</p>
                    </li>
                </ul>
                <ul>
                    <li>6개월 이용권</li>
                    <li>
                        <p>6개월 구독료가 한번에 결제됩니다.</p>
                        <p><span className='about6Line'>60,000원</span> 54,000원 결제</p>
                    </li>
                </ul>
                <ul>
                    <li>12개월 이용권</li>
                    <li>
                        <p>12개월 구독료가 한번에 결제됩니다.</p>
                        <p><span className='about6Line'>120,000원</span> 108,000원 결제</p>
                    </li>
                </ul>
            </div>
            <div className='about6tit2'>
                <Link to='/login'>
                    이용권 구매하기
                    <img src={arrow} alt='arrow'/>
                </Link>
            </div>
        </div>
    )
}

export default CatchSec6
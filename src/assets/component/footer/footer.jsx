import './footer.css';
import Logo from '../../img/img';

export default function Footer() {
    return (
        <footer>
            <div className='w1440 flex footerWrap'>
                <a href="/"> <img src={Logo} alt="logo" /></a>
                <div className='footerTxt'>
                <ul className='flex footer_top'>
                    <li>개인정보처리방침<span></span></li>
                    <li>Catch!Math_Monsters@M&M’s.co.kr</li>
                </ul>
                <div className='flex footerInfo'>
                    <ul>
                        <li>주소 : 서울특별시 노원구 상계동 593-1 화일빌딩 3층 (주) 캐치! 수학 몬스터즈<span></span></li>
                    </ul>
                    <ul className='flex'>
                        <li>대표 : M&M’s<span></span></li>
                        <li>대표전화 : 070 - 8282 - 8282</li>
                    </ul>
                </div>
                <p>Copyright ⓒ 캐치! 수학 몬스터즈. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
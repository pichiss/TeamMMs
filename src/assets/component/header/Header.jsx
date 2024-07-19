import './header.css'
import img from '../../img/몬스터/로고2.png'

function Header() {

  return (
    <nav className='flex'>
        <h1>
            <img src={img} alt='logo'/>
        </h1>
        <ul className='navTab flex'>
            <li>캐치! 수학몬스터즈</li>
            <li>학습하기</li>
            <li>알림나무</li>
            <li>학부모코너</li>
        </ul>
        <ul className='navLogin flex'>
            <li>로그인</li>
            <li>|</li>
            <li>회원가입</li>
        </ul>
    </nav>
  )
}

export default Header

import { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css'
import img from '../../img/monster/로고3.png'
import monsters from '../../img/monsters.png'

function Header() {
  // 햄버거 메뉴
  let [hamClick, setHamClick] = useState(false);
  function hamAction(){
    setHamClick((e)=>!e)
  }

  return (
    <>
      <nav className='flex'>
          <h1>
            <Link to='/TeamMMs/'><img src={img} alt='logo'/></Link>
          </h1>
          <ul className='navTab flex'>
              <li>캐치! 수학몬스터즈</li>
              <li>학습하기</li>
              <Link to='/TeamMMs/noticeList'><li>알림나무</li></Link>
              <li>학부모코너</li>
          </ul>
          <ul className='navLogin flex'>
              <Link to='/TeamMMs/login'><li>로그인</li></Link>
              <li>|</li>
              <Link to='/TeamMMs/join'><li>회원가입</li></Link>
          </ul>
          <ul className={hamClick == false ? `navHam` : `navHam hamAction`} onClick={hamAction}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </nav>
      {hamClick == true ? 
        <div className='hamMenu'>
          <ul className='hamSubMenu'>
            <li>캐치! 수학 몬스터즈</li>
            <li>학습하기</li>
            <Link to='/TeamMMs/noticeList'><li>알림나무</li></Link>
            <li>학부모코너</li>
          </ul>
          <ul className='hamLogin'>
            <li>로그인</li>
            <li>|</li>
            <li>회원가입</li>
          </ul>
          <div className='monsters'>
            <img src={monsters}/>
          </div>
        </div>
        :
        null
      }
    </>
  )
}

export default Header



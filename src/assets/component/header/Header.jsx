import { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css'
import img from '../../img/monster/로고3.png'
import monsters from '../../img/monsters.png'

function Header({setPage}) {
  // 햄버거 메뉴
  let [hamClick, setHamClick] = useState(false);
  function hamAction(){
    setHamClick((e)=>!e)
  }
  function close(){
    setHamClick((e)=>!e)
  }

  return (
    <>
      <nav className='flex'>
          <h1>
            <Link to='/TeamMMs/'><img src={img} alt='logo'/></Link>
          </h1>
          <ul className='navTab flex'>
            <Link to='/TeamMMs/'><li>캐치! 수학몬스터즈</li></Link>
              <Link to='/education'><li onClick={()=>setPage(false)}>학습하기</li></Link>
              <Link to='/TeamMMs/'><li>알림나무</li></Link>
              <Link to='/TeamMMs/'><li>학부모코너</li></Link>
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
            <Link to='/TeamMMs/'><li>캐치! 수학 몬스터즈</li></Link>
            <Link to='/education'><li>학습하기</li></Link>
            <Link to='/TeamMMs/'><li>알림나무</li></Link>
            <Link to='/TeamMMs/mypage'><li>학부모코너</li></Link>
          </ul>
          <ul className='hamLogin'>
            <Link to='/TeamMMs/login'><li onClick={close}>로그인</li></Link>
            <li>|</li>
            <Link to='/TeamMMs/join'><li onClick={close}>회원가입</li></Link>
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



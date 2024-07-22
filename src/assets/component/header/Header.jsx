import { useState } from 'react';

import './header.css'
import img from '../../img/몬스터/로고3.png'
import monsters from '../../img/monsters.png'

function Header() {
  let [hamClick, setHamClick] = useState(false);
  function hamAction(){
    setHamClick((e)=>!e)
  }


  return (
    <>
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
            <li>알림나무</li>
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



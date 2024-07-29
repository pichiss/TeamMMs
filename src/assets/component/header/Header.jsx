import { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css'
import img from '../../img/monster/로고3.png'
import monsters from '../../img/monsters.png'
import clo from '../../img/icon/x.png'
import star from '../../img/icon/star.png'

function Header({setPage, user, kakaoLogout}) {
    // 햄버거 메뉴
    let [hamClick, setHamClick] = useState(false);
    function hamAction(){
        setHamClick((e)=>!e)
    }
    function close(){
        setHamClick((e)=>!e)
    }

    // 마이탭 메뉴
    let [myClick, setMyClick] = useState(false);
    
    function loginAlert(){
        alert('로그인해주세요')
    }
    
    function loginMove(){
        alert('로그인해주세요')
        setHamClick(false)
    }
    function logoutMove(){
        alert('이용해주셔서 감사합니다.')
        setHamClick(false)
    }
    function pageChange(){
        setHamClick(false)
        setPage(false)
    }

    
    return (
    <>
      <nav className='flex'>
            <h1 onClick={()=>setPage(true)}>
                <Link to='/'><img src={img} alt='logo'/></Link>
            </h1>
            <ul className='navTab flex'>
                <Link to='/catch'><li>캐치! 수학몬스터즈</li></Link>
                {user?
                    <Link to='/education' onClick={()=>setPage(false)}><li>학습하기</li></Link>
                :
                    <Link to='/login' onClick={loginAlert}><li>학습하기</li></Link>
                }
                <Link to='/noticeList'><li>알림나무</li></Link>
                {user?
                    <Link to='/mypage'><li>학부모코너</li></Link>
                :
                    <Link to='/login' onClick={loginAlert}><li>학부모코너</li></Link>
                }
            </ul>
            {user ?
                <div className='navMy'>
                    <div className='navMyName' onClick={()=>setMyClick(true)}>
                        <p>{user.nickname}</p>
                    </div>
                    {myClick ?
                    <div className='navMyTab'>
                        <ul>
                            <li className='navClose'>
                                <div onClick={()=>setMyClick(false)}>
                                    <img src={clo} alt='close button'/>
                                </div>
                            </li>
                            <li className='navLoginInfo'>
                                <div className='navMyImg'>
                                    <img src={user.profileImg} alt='my page'/>
                                </div>
                                <p>안녕하세요, {user.nickname}님.</p>
                            </li>
                            <li className='navPoint'>
                                <img src={star} alt='point'/>
                                <div>
                                    <p>1000</p>
                                    <p>pt</p>
                                </div>
                            </li>
                            <li className='navMyLog'>
                                <Link to='/' onClick={kakaoLogout}><div onClick={logoutMove}>로그아웃</div></Link>
                            </li>
                        </ul>
                    </div>
                    :
                    null
                    }
                </div>
            :
                <ul className='navLogin flex'>
                    <Link to='/login'><li>로그인</li></Link>
                    <li>|</li>
                    <Link to='/join'><li>회원가입</li></Link>
                </ul>
            }
            <ul className={hamClick == false ? `navHam` : `navHam hamAction`} onClick={hamAction}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
        {hamClick == true ? 
            <div className='hamMenu'>
                <ul className='hamSubMenu'>
                    <Link to='/catch' onClick={()=>setHamClick(false)}><li>캐치! 수학 몬스터즈</li></Link>
                    {user?
                        <Link to='/education' onClick={pageChange}><li>학습하기</li></Link>
                    :
                        <Link to='/login' onClick={loginMove}><li>학습하기</li></Link>
                    }
                    <Link to='/noticeList' onClick={()=>setHamClick(false)}><li>알림나무</li></Link>
                    {user?
                        <Link to='/mypage' onClick={()=>setHamClick(false)}><li>학부모코너</li></Link>
                    :
                        <Link to='/login' onClick={loginMove}><li className='navCursor'>학부모코너</li></Link>
                    }
                </ul>
                {user ?
                    <div className='subNavMyLog'>
                        <Link to='/' onClick={kakaoLogout}><div onClick={logoutMove}>로그아웃</div></Link>
                    </div>
                :
                    <ul className='hamLogin'>
                        <Link to='/login'><li onClick={close}>로그인</li></Link>
                        <li>|</li>
                        <Link to='/join'><li onClick={close}>회원가입</li></Link>
                    </ul>
                }
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
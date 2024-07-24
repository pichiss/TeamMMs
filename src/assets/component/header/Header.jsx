import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './header.css'
import img from '../../img/monster/로고3.png'
import monsters from '../../img/monsters.png'
import my from '../../img/icon/myicon.png'
import clo from '../../img/icon/x.png'

function Header({setPage, code}) {
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

    // 로그아웃
    function kakaoLogout(kakaoKey){
        Kakao.init(kakaoKey);   //초기화
        Kakao.isInitialized();

        if(!Kakao.Auth.getAccessToken()){   //토근이 있는지 확인
            console.log('Not logged in.');
            return;
        }

        Kakao.Auth.logout(function(){   // 카카오 로그아웃
            console.log(Kakao.Auth.getAccessToken());
        })
    }

    return (
    <>
      <nav className='flex'>
            <h1>
                <Link to='/TeamMMs/'><img src={img} alt='logo'/></Link>
            </h1>
            <ul className='navTab flex'>
                <Link to='/TeamMMs/'><li>캐치! 수학몬스터즈</li></Link>
                <Link to='/TeamMMs/'><li onClick={()=>setPage(false)}>학습하기</li></Link>
                <Link to='/TeamMMs/'><li>알림나무</li></Link>
                <Link to='/TeamMMs/'><li>학부모코너</li></Link>
            </ul>
            {code ?
                <div className='navMy'>
                    <div className='navMyName' onClick={()=>setMyClick(true)}>
                        <p>금주</p>
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
                                    <img src={my} alt='my page'/>
                                </div>
                                <p>안녕하세요, 000님.</p>
                            </li>
                            <li className='navMyLog'>
                                <Link to='/TeamMMs/' onClick={()=>setMyClick(false)}><div>마이페이지</div></Link>
                                <Link to='/TeamMMs/'><div>로그아웃</div></Link>
                            </li>
                        </ul>
                    </div>
                    :
                    null
                    }
                </div>
            :
                <ul className='navLogin flex'>
                    <Link to='/TeamMMs/login'><li>로그인</li></Link>
                    <li>|</li>
                    <Link to='/TeamMMs/join'><li>회원가입</li></Link>
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
                    <Link to='/TeamMMs/'><li>캐치! 수학 몬스터즈</li></Link>
                    <Link to='/TeamMMs/'><li>학습하기</li></Link>
                    <Link to='/TeamMMs/'><li>알림나무</li></Link>
                    <Link to='/TeamMMs/mypage'><li>학부모코너</li></Link>
                </ul>
                {code ?
                    <div>hello</div>
                :
                    <ul className='hamLogin'>
                        <Link to='/TeamMMs/login'><li onClick={close}>로그인</li></Link>
                        <li>|</li>
                        <Link to='/TeamMMs/join'><li onClick={close}>회원가입</li></Link>
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



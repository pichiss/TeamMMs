import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pf_bg from '../../img/profile_bg.svg';
import pf_bg_M from '../../img/profile_bg2.svg';
import pt_bg from '../../img/point_bg.svg';
import question from '../../img/icon/question.png';
import door from '../../img/icon/door.png';
import './EduHeader.css';

function EduHeader({ setPage, user, point, setHelpPop  }) {

    const [width, setWidth] = useState(window.innerWidth);

    function handleResize(){
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        }
    }, [])
  
    return (
        <article className='flex eduProfile'>
            <div className='eduPfL'>
                <h2>{user.nickname}</h2>
                <p>1레벨 1단원</p>
                {width <= 768 ?
                    <img src={pf_bg_M} alt="profile-background-image" />
                :   <img src={pf_bg} alt="profile-background-image" />}
            </div>
            <div className='flex eduPfR'>
                <div className='eduPtWrap'>
                    <h2>{point}p</h2>
                    <img src={pt_bg} alt="point" />
                </div>
                <div className='eduHelpWrap' onClick={()=>setHelpPop(true)}>
                    <h2>도움말</h2>
                    <div className='flex eduCircle'>
                        <img src={question} alt="help-button" className='helpBtn' />
                    </div>
                </div>
                <div className='eduExitWrap' onClick={() => setPage(true)}>
                    <h2>나가기</h2>
                    <Link to='/'>
                        <div className='flex eduCircle'>
                            <img src={door} alt="exit-button" className='exitBtn' />
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default EduHeader;
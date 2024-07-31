import navNotiIcon from '../../img/icon/noticeIcon.svg';
import mypageIcon from '../../img/icon/mypageIcon.svg';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './subnav.css'

function Subnav(props){
    const navNoti = ['알림나무', navNotiIcon]
    const myPage = ['학부모코너', mypageIcon]

    const navNotiList = [
        {
            id: 1,
            tit:'공지사항&이벤트',
            link : '/noticeList'
        },
        {
            id: 2,
            tit:'FAQ',
            link : '/faq'
        }
    ]

    const myPageList = [
        {
            id : '1',
            tit:'내 정보',
            link : '/mypage'
        },
        {
            id : '2',
            tit:'학습현황',
            link : '/mypage/learning'
        },
        {
            id : '3',
            tit:'포인트 내역',
            link : '/mypage/point'
        },
        {
            id : '4',
            tit:'1:1 문의',
            link : '/mypage/ask'
        }
    ]


    let urlName = window.location.href.split('TeamMMs');
    
    
    let [activeColor, setActiveColor] = useState(0);
    function urls(link, id){
        useEffect(()=>{       
            if(urlName[1] === link){
                console.log(id)
                setActiveColor(id)
            }else{
                null
            }
        },[link])
    }



    return(
        <>


        {props.tit==='알림나무'?
        <div>
            <div className='subnav'>
                <p>{navNoti[0]}</p>
                <img src={navNoti[1]} alt={navNoti[0]}/>
            </div>
            <div className='subnavList'>
                <ul className='subnavitem'>
                    {navNotiList.map((tab)=>
                        <li key={tab.id} onClick={urls(tab.link, tab.id)} className={activeColor === tab.id ? 'changeblue' : ''}>
                            <Link to={tab.link}>{tab.tit}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        :
        <div>
            <div className='subnav'>
                <p>{myPage[0]}</p>
                <img src={myPage[1]} alt={myPage[0]}/>
            </div>
            <div className='subnavList'>
                <ul className='subnavitem'>
                    {myPageList.map((tab)=>
                        <li key={tab.id} onClick={urls(tab.link, tab.id)} className={activeColor === tab.id ? 'changeblue' : ''}>
                            <Link to={tab.link}>{tab.tit}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        }



        {/* {props.tit==='알림나무'?  
            <div>
                <div className='subnav'>
                    <p>{props.tit}</p>
                    {navNoti.map((list)=>
                        <img src={list.icon} alt={list.icon} key={list.key}/>
                    )}
                </div>
                <div className='subnavList'>
                    <ul className='subnavitem'>
                        {notiList.map((item)=>
                            <li className={selectedKey === item.key ? 'changeblue' : null} onClick={() => changeblue(item.key)} key={item.key}>
                                <Link to={item.link}>{item.tit}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        : 
            <div>
                <div className='subnav'>
                    <p>{props.tit}</p>
                    {mypage.map((list)=>
                        <img src={list.icon} alt={list.icon} key={list.key}/>
                    )}
                </div>
                <div className='subnavList'>
                    <ul className='subnavitem'>
                    {mypageList.map((item)=>
                        <li className={selectedKey === item.key ? 'changeblue' : null}  key={item.key}>
                            <Link to={item.link} onClick={() => changeblue(item.key)}>{item.tit}</Link>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        } */}
        </>
    )
}

export default Subnav;
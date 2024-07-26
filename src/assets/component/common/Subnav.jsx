import navNotiIcon from '../../img/icon/noticeIcon.svg';
import mypageIcon from '../../img/icon/mypageIcon.svg';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './subnav.css'

function Subnav(props){
    const [selectedKey, setSelectedKey] = useState(null);

const navNoti = [
    {tit:'알림나무',
    icon: navNotiIcon,
    key:'1'}]
const mypage =
    [{tit:'학부모코너',
    icon: mypageIcon,
    key:'2'
    }]
const notiList = [
    {tit:'공지사항&이벤트',
    key : '1',
    link : '/notice'
    },
    {tit:'FAQ',key : '2',
    link : '/faq'}]
const mypageList=[
    {tit:'내 정보',
    key : '1',
    link : '/mypage'
    },
    {tit:'학습현황',
    key : '2',
    link : '/mypage'
    },
    {tit:'포인트 내역',
    key : '3',
    link : '/mypage'
    },
    {tit:'1:1 문의',
    key : '4',
    link : '/mypage/ask'}]

    const [selectedKey, setSelectedKey] = useState(mypageList[0].key);

    const [selectedKey, setSelectedKey] = useState(mypageList[0].key);

    function changeblue(key){
        setSelectedKey(key);
    }



    return(
        <>
        {props.tit==='알림나무'?  <div>
        <div className='subnav'>
            <p>{props.tit}</p>
            {navNoti.map((list)=>
            <img src={list.icon} alt={list.icon} key={list.key}></img>
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
        </div>: <div>
        <div className='subnav'>
            <p>{props.tit}</p>
            {mypage.map((list)=>
            <img src={list.icon} alt={list.icon} key={list.key}></img>
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
    }
    </>
    )
}

export default Subnav;
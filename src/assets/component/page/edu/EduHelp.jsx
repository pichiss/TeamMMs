import { useEffect, useRef, useState } from 'react';

import HelpSec1 from './EduHelpSec/HelpSec1';
import HelpSec2 from './EduHelpSec/HelpSec2';
import HelpSec3 from './EduHelpSec/HelpSec3';
import HelpSec4 from './EduHelpSec/HelpSec4';
import HelpSec5 from './EduHelpSec/HelpSec5';

import './EduHelpSec/eduHelp.css'

import close from '../../../img/icon/x_yellow.png';


function EduHelp({setHelpPop}){
    const helpNav = [
        {
            id : 1,
            tit : '캐치 홈'
        },
        {
            id : 2,
            tit : '오늘의 학습'
        },
        {
            id : 3,
            tit : '학습영상'
        },
        {
            id : 4,
            tit : '오답노트'
        },
        {
            id : 5,
            tit : '포인트샵'
        },
    ]
    const [page, setPage] = useState('캐치홈')

    // const [col, setCol] = useState(null)
    // function change(id, navId, tit){
    //     useEffect(()=>{
    //         console.log(id)
    //         console.log(navId)
    //         console.log(tit)
    //         if(id === navId){
    //             setPage(tit)
    //             console.log(tit)
    //         }else{
    //             null
    //         }
    //     },[id])
    // }

    return(
        <section className='eduHelpPopWrap'>
            <article className='eHPop'>
                <div className='eHHeader'>
                    <ul>
                        {/* {helpNav.map((nav, id)=>
                            <li key={nav.id} onClick={change(id, nav.id, nav.tit)} className={id === nav.id ? 'eHNavColor': ''}><p>{nav.tit}</p></li>
                        )} */}
                        <li onClick={()=>setPage('캐치홈')}><p>캐치 홈</p></li>
                        <li onClick={()=>setPage('오늘의학습')}><p>오늘의 학습</p></li>
                        <li onClick={()=>setPage('학습영상')}><p>학습영상</p></li>
                        <li onClick={()=>setPage('오답노트')}><p>오답노트</p></li>
                        <li onClick={()=>setPage('포인트샵')}><p>포인트샵</p></li>
                    </ul>
                </div>
                <div className='eHInfo'>
                    {page === '캐치홈' && <HelpSec1/>}
                    {page === '오늘의학습' && <HelpSec2/>}
                    {page === '학습영상' && <HelpSec3/>}
                    {page === '오답노트' && <HelpSec4/>}
                    {page === '포인트샵' && <HelpSec5/>}
                </div>
            </article>
            <div className='eHPopClose' onClick={()=>setHelpPop(false)}>
                <img src={close} alt='close'/>
            </div>
        </section>
    )
}

export default EduHelp;
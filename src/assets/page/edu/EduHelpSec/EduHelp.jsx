import { useEffect, useRef, useState } from 'react';

import HelpSec from './HelpSec';

import './eduHelp.css'

import close from '../../../img/icon/x_yellow.png';

import home11 from '../../../img/eduPop/home1-1.png'
import home21 from '../../../img/eduPop/home2-1.png'
import home31 from '../../../img/eduPop/home3-1.png'
import home41 from '../../../img/eduPop/home4-1.png'

import home12 from '../../../img/eduPop/home1-2.png'
import home22 from '../../../img/eduPop/home2-2.png'
import home32 from '../../../img/eduPop/home3-2.png'
import home42 from '../../../img/eduPop/home4-2.png'

import que11 from '../../../img/eduPop/que1-1.png'
import que21 from '../../../img/eduPop/que2-1.png'
import que31 from '../../../img/eduPop/que3-1.png'

import que12 from '../../../img/eduPop/que1-2.png'
import que22 from '../../../img/eduPop/que2-2.png'
import que32 from '../../../img/eduPop/que3-2.png'

import video11 from '../../../img/eduPop/video1-1.png'
import video21 from '../../../img/eduPop/video2-1.png'

import video12 from '../../../img/eduPop/video1-2.png'
import video22 from '../../../img/eduPop/video2-2.png'

import re11 from '../../../img/eduPop/re1-1.png'
import re21 from '../../../img/eduPop/re2-1.png'
import re31 from '../../../img/eduPop/re3-1.png'

import re12 from '../../../img/eduPop/re1-2.png'
import re22 from '../../../img/eduPop/re2-2.png'
import re32 from '../../../img/eduPop/re3-2.png'

import point11 from '../../../img/eduPop/point1-1.png'
import point21 from '../../../img/eduPop/point2-1.png'
import point31 from '../../../img/eduPop/point3-1.png'

import point12 from '../../../img/eduPop/point1-2.png'
import point22 from '../../../img/eduPop/point2-2.png'
import point32 from '../../../img/eduPop/point3-2.png'

function EduHelp({setHelpPop}){
    const helpNav = [
        {
            id : 1,
            tit : '캐치홈'
        },
        {
            id : 2,
            tit : '오늘의학습'
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

    const home1 = [home11, home21,home31, home41]
    const home2 = [home12, home22,home32, home42]
    const que1 = [que11, que21,que31]
    const que2 = [que12, que22,que32]
    const video1 = [video11, video21]
    const video2 = [video12, video22]
    const re1 = [re11, re21, re31]
    const re2 = [re12, re22, re32]
    const point1 = [point11, point21, point31]
    const point2 = [point12, point22, point32]

    let [click, setClick] = useState(0);
    let liRef = useRef({});

    console.log(liRef.current[1])

    useEffect(()=>{
        if(click === 0 && page === '캐치홈'){
            liRef.current[1].style.background = '#F8CF03';            
        }else if(click === 1){
            liRef.current[1].style.background = '#F8CF03';    
        }else{
            liRef.current[1].style.background = '#fff';            
        }
    },[click])
    
    
    return(
        <section className='eduHelpPopWrap'>
            <article className='eHPop'>
                <div className='eHHeader'>
                    <ul>
                        {helpNav.map((nav)=>
                            <li key={nav.id} onClick={()=>setClick(nav.id)} >
                                <p ref={ref => (liRef.current[nav.id] = ref)} onClick={()=>setPage(nav.tit)} className={click === nav.id ? 'eHNavColor' : ''}>{nav.tit}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='eHInfo'>
                    {page === '캐치홈' && <HelpSec swiperImg1={home1} swiperImg2={home2}/>}
                    {page === '오늘의학습' && <HelpSec swiperImg1={que1} swiperImg2={que2}/>}
                    {page === '학습영상' && <HelpSec swiperImg1={video1} swiperImg2={video2}/>}
                    {page === '오답노트' && <HelpSec swiperImg1={re1} swiperImg2={re2}/>}
                    {page === '포인트샵' && <HelpSec swiperImg1={point1} swiperImg2={point2}/>}
                </div>
            </article>
            <div className='eHPopClose' onClick={()=>setHelpPop(false)}>
                <img src={close} alt='close'/>
            </div>
        </section>
    )
}

export default EduHelp;
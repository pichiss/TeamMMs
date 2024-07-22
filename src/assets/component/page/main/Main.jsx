import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './mainPage.css'
import top from '../../../img/monster/비비.png'
import Sec1 from './section/Sec1'
import Sec2 from './section/Sec2'
import Sec3 from './section/Sec3'
import Sec4 from './section/Sec4'
import back from '../../../img/background_boss.png'
import banner from '../../../img/mainBanner.png'

function Main(){
    // top 버튼
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    // 화면 너비/높이
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    function onScroll() {
        setHeight(window.scrollY);
    }
    function handleResize(){
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        console.log(height)

        window.addEventListener("resize", handleResize);
        console.log(width)
        
    }, [height, width]);

    // ~889 이면, 2748
    // width 889 일때, height 4270



    return(
    <Link to='/TeamMMs/'>
        <main style={{backgroundImage : `url(${back})`}}>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <div className='topBtn' onClick={scrollToTop}>
                <p>TOP</p>
                <img src={top} alt='top btn'/>
            </div>
            <div className={height >= 2748 ? `mainBanner mainBannerPosition` : 'mainBanner'}>
                <img src={banner} alt='banner'/>
            </div>
        </main>
    </Link>
    )
}

export default Main
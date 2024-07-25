import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './mainPage.css'
import top from '../../../img/monster/비비.png'
import Sec1 from './section/Sec1'
import Sec2 from './section/Sec2'
import Sec3 from './section/Sec3'
import Sec4 from './section/Sec4'
import back from '../../../img/background_boss.png'
import banner from '../../../img/mainBanner.png'
import banner2 from '../../../img/mainBanner2.png'

function Main(){
    // top 버튼
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    // // 배너 sticky
    const [width, setWidth] = useState(window.innerWidth);

    function handleResize(){
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log(width)
    }, [width]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [width]);


    
    return(
    <main style={{backgroundImage : `url(${back})`}}>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <Sec4/>
        <div className='mainBanner'>
            <Link to='/login'>
                {width < 1100 ? 
                    <img src={banner2} alt='banner'/>
                :
                    <img src={banner} alt='banner'/>
                }
            </Link>
        </div>
        <div className='topBtn' onClick={scrollToTop}>
            <p>TOP</p>
            <img src={top} alt='top btn'/>
        </div>
        <div className='studyBtn' onClick={scrollToTop}>
            <Link to='/login'>
                <p>무료<br/>체험</p>
            </Link>
        </div>
    </main>
    )
}

export default Main

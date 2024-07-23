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
    // const [height, setHeight] = useState(0);
    // const [width, setWidth] = useState(window.innerWidth);
    // let [banClass, setBanClass] = useState('');

    // function onScroll() {
    //     setHeight(window.scrollY);
    // }
    // function handleResize(){
    //     setWidth(window.innerWidth);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", onScroll);
    //     console.log(height)

    //     window.addEventListener("resize", handleResize);
    //     console.log(width)
        
    //     if(width >= 1310 && height >= 2700){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else if(width >= 1100 && height >= 2330){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else if(width < 1100 && height >= 4900){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else if(width < 1025 && height >= 4800){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else if(width < 992 && height >= 4590){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else if(width < 905 && height >= 4400){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else if(width < 591 && height >= 4300){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else if(width < 504 && height >= 3800){
    //         setBanClass('mainBanner mainBannerPosition')
    //     }else{
    //         setBanClass('mainBanner')
    //     }
    // }, [height, width]);

    // 화면 너비
    const [width, setWidth] = useState(window.innerWidth);

    function handleResize(){
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log(width)
    }, [width]);


    
    return(
    <Link to='/TeamMMs/'>
        <main style={{backgroundImage : `url(${back})`}}>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <div className='mainBanner'>
                {width < 1100 ? 
                    <img src={banner2} alt='banner'/>
                :
                    <img src={banner} alt='banner'/>
                }
            </div>
            <div className='topBtn' onClick={scrollToTop}>
                <p>TOP</p>
                <img src={top} alt='top btn'/>
            </div>
            <div className='studyBtn' onClick={scrollToTop}>
                <p>무료<br/>체험</p>
            </div>
        </main>
    </Link>
    )
}

export default Main
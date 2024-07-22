import './mainPage.css'
import top from '../../../img/몬스터/비비.png'
import Sec1 from './section/Sec1'
import Sec2 from './section/Sec2'
import Sec3 from './section/Sec3'
import Sec4 from './section/Sec4'
import back from '../../../img/background_boss.png'
import banner from '../../../img/mainBanner.png'
import { Link } from 'react-router-dom';

function Main(){
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

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
        <div className='mainBanner'>
            <img src={banner} alt='banner'/>
        </div>
    </main>
    </Link>
    )
}

export default Main
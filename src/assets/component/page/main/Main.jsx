import './mainPage.css'
import top from '../../../img/몬스터/비비.png'
import Sec1 from './section/Sec1'
import Sec2 from './section/Sec2'
import Sec3 from './section/Sec3'
import Sec4 from './section/Sec4'
import back from '../../../img/background_boss.png'
// import back1 from '../../../img/background_1.png'
// import back2 from '../../../img/background_2.png'

function Main(){

    return(
    <main style={{backgroundImage : `url(${back})`}}>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <Sec4/>
        <div className='topBtn'>
            <p>TOP</p>
            <img src={top} alt='top btn'/>
        </div>
    </main>
    )
}

export default Main
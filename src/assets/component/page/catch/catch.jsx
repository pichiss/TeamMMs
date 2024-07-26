import './catch.css'

import CatchSec1 from './catchSection/CatchSec1';
import CatchSec2 from './catchSection/CatchSec2';
import CatchSec3 from './catchSection/CatchSec3';
import CatchSec4 from './catchSection/CatchSec4';
import CatchSec5 from './catchSection/CatchSec5';
import CatchSec6 from './catchSection/CatchSec6';
import top from '../../../img/monster/비비.png'

function Catch(){
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <div className='catchWrap'>
            <CatchSec1/>
            <CatchSec2/>
            <CatchSec3/>
            <CatchSec4/>
            <CatchSec5/>
            <CatchSec6/>
            <div className='aboutTop' onClick={scrollToTop}>
                <p>TOP</p>
                <img src={top} alt='top btn'/>
            </div>
        </div>
    )
}

export default Catch
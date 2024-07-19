import pf_bg from '../../../img/profile_bg.svg';
import pt_bg from '../../../img/point_bg.svg';
import cc_bg from '../../../img/circle_bg.svg';
import './EduMain.css';

function EduMain(){
    return(
        <section className='eduSec'>
            <article className='flex'>
                <div>
                    <img src={pf_bg} alt="" />
                </div>
                <div>
                    <img src={pt_bg} alt="" />
                    <img src={cc_bg} alt="" />
                    <img src={cc_bg} alt="" />
                </div>
            </article>
        </section>
    )
}

export default EduMain;
import Subnav from '../../common/Subnav';
import FaqData from './faqdata';
import Plusbtn from '../../../img/icon/plus.png'
import './faq.css';

function Faq(){
    return(
        <>
        <section className='w1440 pa55 flex'>
        <Subnav tit={'알림나무'}/>
        <div className='faqWrap'>
            <h2 className='subtit'>FAQ</h2>
            <ul>
                {FaqData.map((faq)=>
                <li key={faq.id}>{faq.question}
                    <img src={Plusbtn} alt="plus button" className='plusbtn'/>
                    <div className='faqAns'>{faq.ansuer}</div>
                </li>
                )}

            </ul>
        </div>
        </section>
        </>
    )
}

export default Faq;
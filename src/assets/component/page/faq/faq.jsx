import { useState, useEffect } from 'react';
import Subnav from '../../common/Subnav';
import FaqData from './faqdata';
import Plusbtn from '../../../img/icon/plus.png'
import './faq.css';

function Faq(){
    const [question, setQuestion] = useState(null);
    function scrollEvent(idx){
        setQuestion((question)=>question === idx ? null : idx)
    }

  
    return(
        <>
        <section className='w1440 pa55 flex'>
        <Subnav tit={'알림나무'}/>
        <div className='faqWrap'>
            <h2 className='subtit'>FAQ</h2>
            <ul>
                    {FaqData.map((faq, idx)=>
                        <li key={idx} onClick={()=>scrollEvent(idx)}>
                        {faq.question}
                        <img src={Plusbtn} alt="plus button" className={`plusbtn ${idx === question ? 'plusbtnRotate' : 'plusbtn'}`}/>
                        <div className={`${idx === question ? 'faqAns' : 'faqAnsNo'}`} >{faq.ansuer}</div>
                        </li>
                    )} 

            </ul>
        </div>
        </section>
        </>
    )
}

export default Faq;
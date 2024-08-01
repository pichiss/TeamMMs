import service from '../../../assets/img/icon/고객센터.png'

import FaqData from '../../faq/faqdata';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { noticeContext } from '../../../App';

function Sec2(){
    const datas = useContext(noticeContext).reverse().slice(0,5)
    const Fdatas = FaqData.slice(0,5)

    return(
        <section className='mainSec2 w1440 flex'>
            <ul className='mainEvent'>
                <li className='sec2Tit flex'>
                    <h2>공지사항&이벤트</h2>
                    <Link to='/noticeList'><p>더보기 <span>+</span></p></Link>
                </li>
                <li className='sec2Info'>
                    {datas.map((data) => (
                        <Link to={`/detail/${data.id}`} key={data.id}><div>{'['}{data.notiType}{'] '}{data.name}</div></Link>
                    ))}
                </li>
            </ul>
            <ul className='mainFaq'>
                <li className='sec2Tit flex'>
                    <h2>FAQ</h2>
                    <Link to='/faq'><p>더보기 <span>+</span></p></Link>
                </li>
                <li className='sec2Info'>
                    {Fdatas.map((faq) => (
                        <Link to='/faq'><div key={faq.id}>{faq.question}</div></Link>
                    ))}
                </li>
            </ul>
            <ul className='mainService'>
                <li className='sec2Tit'>
                    <h2>고객센터</h2>
                </li>
                <li className='serviceInfo'>
                    <img src={service} alt='service center'/>
                    <div>070 - 8282 - 8282</div>
                </li>
            </ul>
        </section>

    )
}
export default Sec2;
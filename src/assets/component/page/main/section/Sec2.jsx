import service from '../../../../img/아이콘/고객센터.png'

function Sec2(){
    let datas = [
        '[공지사항] 공지사항입니다, 공지사항공지사항입니다, 공지사항.공지사항입니다, 공지사항.공지사항입니다, 공지사항.',
        '[이벤트] 이벤트입니다, 이벤트입니다..',
        '[공지사항] 공지사항입니다, 공지사항..',
        '[이벤트] 이벤트입니다, 이벤트입니다..'
    ]

    return(
    <section className='mainSec2 w1440 flex'>
        <ul className='mainEvent'>
            <li className='sec2Tit flex'>
                <h2>공지사항&이벤트</h2>
                <p>더보기 <span>+</span></p>
            </li>
            <li className='sec2Info'>
                {datas.map((data)=><>
                    <div>{data}</div>
                </>)}
            </li>
        </ul>
        <ul className='mainFaq'>
            <li className='sec2Tit flex'>
                <h2>FAQ</h2>
                <p>더보기 <span>+</span></p>
            </li>
            <li className='sec2Info'>
                {datas.map((data)=><>
                    <div>{data}</div>
                </>)}
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
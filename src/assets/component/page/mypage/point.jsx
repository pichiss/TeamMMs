import SubHead from '../../common/Subhead';
import Subnav from "../../common/Subnav";
import monster from '../../../img/monster/monster5_2.png';
import './point.css';

function Point(){
    return(
        <>
            <SubHead chara={monster} />
            <section className='w1440 flex pa55'>
                <Subnav key={1} tit={'학부모 코너'} />
                <article className='pointWrap'>
                    <h2 className='subtit'>학부모 코너</h2>
                    <h3 className='bgBlue'>포인트 적립 내역</h3>
                    <div className='pointHistory'></div>
                    <table className="subscription">
                            <thead>
                                <tr className="bgBlue">
                                    <td>사용내역</td>
                                    <td>사용날짜</td>
                                    <td>포인트</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>[GS25] 디지털상품권 1천원권</td>
                                    <td>2024.07.18</td>
                                    <td className="expend">-1000</td>
                                </tr>
                            </tbody>
                        </table>
                </article>
            </section>
        </>
    )
}

export default Point;
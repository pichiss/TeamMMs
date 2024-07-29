import { PointDatas, PointUseDatas } from './pointData';
import SubHead from '../../common/Subhead';
import Subnav from "../../common/Subnav";
import monster from '../../../img/monster/monster5_2.png';
import './point.css';

function Point({point}){
    const pointReverse = PointDatas.reverse();
    
    return(
        <>
            <SubHead chara={1} />
            <section className='w1440 flex pa55'>
                <Subnav key={1} tit={'학부모 코너'} />
                <article className='pointWrap'>
                    <h2 className='subtit'>포인트 내역</h2>
                    <h3 className='bgBlue'>포인트 적립 내역</h3>
                    <table className='pointHistory'>
                        <thead>
                            <tr className='pointListTit'>
                                <th>현재 포인트</th>
                                <th>누적 포인트</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='pointListTxt'>
                                <td>{point}포인트</td>
                                <td>10000 포인트</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="pointDetail">
                            <thead>
                                <tr className="bgBlue">
                                    <td>적립내역</td>
                                    <td>적립날짜</td>
                                    <td>포인트</td>
                                </tr>
                            </thead>
                            <tbody>
                                {PointDatas.map((pData)=>
                                    <tr key={pData.id}>
                                        <td>{pData.history}</td>
                                        <td>{pData.date}</td>
                                        <td className="point">
                                            <span>{pData.point}</span>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                    </table>
                    <table className="pointDetail">
                            <thead>
                                <tr className="bgBlue">
                                    <td>사용내역</td>
                                    <td>사용날짜</td>
                                    <td>포인트</td>
                                </tr>
                            </thead>
                            <tbody>
                                {PointUseDatas.map((pUse)=>
                                    <tr key={pUse.id}>
                                        <td>{pUse.history}</td>
                                        <td>{pUse.date}</td>
                                        <td className="point">
                                            <span>{pUse.point}</span>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                    </table>
                </article>
            </section>
        </>
    )
}

export default Point;
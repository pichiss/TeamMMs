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
                    <h3>포인트 적립 내역</h3>
                </article>
            </section>
        </>
    )
}

export default Point;
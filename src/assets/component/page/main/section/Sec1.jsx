import log from '../../../../img/몬스터/monster3.png'
import pie from '../../../../img/몬스터/monster2.png'
import bero from '../../../../img/몬스터/monster5_2.png'

function Sec1(){
    return(
    <section className='mainSec1'>
        <ul className='mainMonsters'>
            {/* <li className='mainMonster bobo'>
                <h2>보보</h2>
                <div></div>
            </li> */}
            <li className='mainMonster log'>
                <div className='mainIntro'>
                    <p>
                        문제를 풀어서 <br/>보보를 구해줘로그!
                    </p>
                </div>
                <img src={log} alt='로그'/>
                <h2>로그</h2>
            </li>
            <li className='mainMonster pie'>
                <div className='mainIntro'>
                    <p>
                        안녕, 친구들!
                    </p>
                </div>
                <img src={pie} alt='파이'/>
                <h2>파이</h2>
            </li>
            <li className='mainMonster bero'>
                <div className='mainIntro'>
                    <p>
                        학습하기에서 만나 <br/> 베로!
                    </p>
                </div>
                <img src={bero} alt='베로'/>
                <h2>베로</h2>
            </li>
        </ul>
    </section>
    )
}

export default Sec1;
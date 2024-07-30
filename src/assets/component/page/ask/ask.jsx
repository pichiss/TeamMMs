import { useContext} from 'react';
import { Link } from 'react-router-dom';
import Subnav from '../../common/Subnav';
import {itemContext} from '../../../../App'
// import {editAskContext} from '../../../../App'
import './ask.css'

function Ask(){
  const item = useContext(itemContext);
  console.log(item)

    return(
        <section className='w1440 pa55 flex'>
        <Subnav tit={'학부모 코너'}/>
        <div className='askWrap'>
            <h2 className='subtit'>1:1 문의</h2>
            <table>
                <thead>
                <tr>
                    <td>번호</td>
                    <td>답변내역</td>
                    <td>제목</td>
                    <td>등록일</td>
                </tr>
                </thead>
                <tbody>
                {item.map((item)=>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    {item.ansur === false? <td><span className='ansYet'>답변대기</span></td> : <td><span className='ansEnd'>답변완료</span></td>}
                    <td className='askTit'> <span>[{item.category}]</span> {item.tit}</td>
                    <td>{item.createDate}</td>
                </tr>
                )}
                </tbody>

            </table>
                <Link to='/mypage/askNew'><button>문의</button></Link>
        </div>
        </section>
    )
}

export default Ask;
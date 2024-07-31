import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Subnav from '../../common/Subnav';
import CommonPagination from '../../common/Pagination';
import SubHead from '../../common/Subhead';
import AskSearch from './askboard/askSearch';
import {itemContext} from '../../../../App'
import './ask.css'

function Ask(){
  const items = useContext(itemContext);
  const askReverse = items.sort((a,b)=>(a.id-b.id)).reverse();
  const asklist = askReverse.length;

      // 페이지네이션
      const [pages, setPages] = useState(1);
      const postPerPage = 10;
      const indexOfLastPost = pages * postPerPage;
      const indexOfFirstPost = indexOfLastPost - postPerPage;
      const currentPost = askReverse.slice(indexOfFirstPost, indexOfLastPost);

    return(
        <>
        <SubHead chara={1}/>
        <section className='w1440 pa55 flex'>
        <Subnav tit={'학부모 코너'}/>
        <div className='askWrap'>
            <h2 className='subtit'>1:1 문의</h2>
        <AskSearch allList={asklist}/>
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
                {currentPost.map((item)=>
                <tr key={item.id}>
                    <td>{item.id + 1}</td>
                    {item.ansur === false? <td><span className='ansYet'>답변대기</span></td> : <td><span className='ansEnd'>답변완료</span></td>}
                    <Link to={`/mypage/ask/detail/${item.id}`}><td className='askTit'> <span>[{item.category}]</span> {item.tit}</td></Link>
                    <td>{item.createDate}</td>
                </tr>
                )}
                </tbody>
            </table>
            <Link to='/mypage/askNew'><button className='bgblueBtn'>문의</button></Link>
            <CommonPagination pages={pages} setPages={setPages} postPerPage={postPerPage} datas={items}/>
                
        </div>
        </section>
        </>
    )
}

export default Ask;
import { useState,useContext } from 'react';
import Subnav from '../../component/common/Subnav';
import { Link } from 'react-router-dom';
import CommonPagination from '../../component/common/Pagination';
import SubHead from '../../component/common/Subhead';
import AskSearch from './askboard/askSearch';
import {itemContext} from '../../App'
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
                    <th className='asknumber'>번호</th>
                    <th>답변내역</th>
                    <th>제목</th>
                    <th className='asknumber'>등록일</th>
                </tr>
                </thead>
                <tbody>
                {currentPost.map((item)=>
                <tr key={item.id}>
                    <td className='asknumber'>{item.id + 1}</td>
                    {item.ansur === false? <td><span className='ansYet'>답변대기</span></td> : <td><span className='ansEnd'>답변완료</span></td>}
                    
                        <td className='askTit'><Link to={`/ask/detail/${item.id}`}> [{item.category}]{item.tit}</Link></td>
                    
                    <td className='asknumber'>{item.createDate}</td>
                </tr>
                )}
                </tbody>
            </table>
            <Link to='/askNew'><button className='bgblueBtn'>문의</button></Link>
            <CommonPagination pages={pages} setPages={setPages} postPerPage={postPerPage} datas={items}/>
                
        </div>
        </section>
        </>
    )
}

export default Ask;
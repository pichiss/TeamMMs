import './noticeStyle.css'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { noticeContext } from '../../../../App';
import CommonPagination from '../../common/Pagination';
import Subnav from '../../common/Subnav';
import Btn from './btn';
import NoticeSearch from './noticeSearch';


export default function NoticeList() {

    const datas = useContext(noticeContext);
    const noitsReverse = datas.sort((a,b)=>(a.id-b.id)).reverse();
    const allList = noitsReverse.length
    // 페이지네이션
    const [pages, setPages] = useState(1);
    const postPerPage = 10;
    const indexOfLastPost = pages * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = noitsReverse.slice(indexOfFirstPost, indexOfLastPost);


    const writeBtns = {
        tit : '글쓰기',
        link :'/write',
        Bclass :'writeBtn'
    }
    


    return (
        <>
         <section className="w1440 flex noticeListWrap pa55">
         <Subnav tit={'알림나무'}/>
         <div>
         <h2 className='subtit'>공지사항 & 이벤트</h2>
         <NoticeSearch allList={allList}/>
            <table className='notiTable'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map((data)=>
                    <tr key={data.id}>
                       <td>{data.id + 1}</td>
                       <td>
                       <Link to={`/detail/${data.id}`}>
                        {'['}{data.notiType}{'] '}{data.name}
                        </Link>
                        </td>
                        <td>{data.createDate}</td>
                        <td>{data.views}</td>
                    </tr>)}
                </tbody>
            </table>
            <Btn {...writeBtns}/>
            <CommonPagination pages={pages} setPages={setPages} postPerPage={postPerPage} datas={datas}/>
         </div>
        </section>
        </>
    )
}
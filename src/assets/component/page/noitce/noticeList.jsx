import './noticeStyle.css'
import { Link } from "react-router-dom";

import { useReducer } from "react";
import { Contents, notiReducer } from '../noitce/noticeData';


export default function NoticeList() {

    const [state, dispatch] = useReducer(notiReducer, Contents);
    const { notis } = state;

    return (
        <>
         <section className="w1440 noticeListWrap">
         <h2 className='noticeTit'>공지사항 & 이벤트</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {notis.map((noti,index)=>
                    <tr key={noti.id}>
                       <td>{index+1}</td>
                       <td>
                       <Link to={`/TeamMMs/detail/${noti.id}`}>
                        {'['}{noti.notiType}{'] '}{noti.notiName}
                        </Link>
                        </td>
                        <td>{noti.date}</td>
                        <td>{noti.views}</td>
                    </tr>)}
                </tbody>
            </table>
        </section>
        </>
    )
}
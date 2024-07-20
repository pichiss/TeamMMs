import './noticeStyle.css'
import { useCallback, useReducer, useRef, useState } from "react";
import { Contents, notiReducer } from '../noitce/noticeData';
import { Link } from "react-router-dom";


export default function NoticeList() {

    const [state, dispatch] = useReducer(notiReducer, Contents);
    const { notis } = state;
    const { notiType, notiName, notiText } = state.inputs;
    const notiId = useRef(13);
    const [sortList, setSortList] = useState();

    const createNoti = useCallback((notiType, notiName, notiText) => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const createDate = `${year}-${month}-${day}`;

        dispatch({
            type: 'create',
            noti: {
                notiType, notiName, notiText,
                id: notiId.current,
                createDate
            }
        })
        notiId.current++
    }, [notiType, notiName, notiText]);

    const editNoti = (id, notiType, notiName, notiText) => {
        dispatch({
            type: 'edit',
            id, notiType, notiName, notiText
        })
    }

    const removeNoti = (id) => {
        dispatch({
            type: 'remove',
            id
        })
    }

    const searchNoti = (notiName, notiText) => {
        dispatch({
            type: 'search',
            notiName, notiText
        })
    }

    const getSortList = () => {
        const sortItem = (item) => {
            switch(sortList){
                case '공지사항' :
                return item.notiType === '공지사항';
                case '이벤트' :
                return item.notiType === '이벤트';
                default:
                return null
            }
        }
        const sortingList = sortList === notis.filter((item)=>sortItem(item))
        return sortingList
    }

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
                    {notis.map((noti)=>
                    <tr key={noti.id}>
                        <td>{noti.id}</td>
                        <td><Link key={noti.id} to={`/noticeList/${noti.id}`}>{'['}{noti.notiType}{'] '}{noti.notiName} </Link></td>
                        <td>{noti.date}</td>
                        <td>{noti.views}</td>
                    </tr>)}
                </tbody>
            </table>
        </section>
        </>
    )
}
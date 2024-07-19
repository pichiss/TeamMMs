import './noticeStyle.css';
import { useReducer } from "react";
import { Contents, notiReducer } from '../noitce/noticeData';

export default function NoticeDetail({id}) {

    const [state, dispatch] = useReducer(notiReducer, Contents);
    const { notis } = state;

    return(
        <section className='w1440' key={id}>
            <h2 className='noticeTit'>공지사항 & 이벤트</h2>
        </section>
    )
}
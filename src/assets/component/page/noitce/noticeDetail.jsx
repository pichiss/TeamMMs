import "./noticeStyle.css";
import { useParams } from "react-router-dom";
import { useReducer } from "react";
import { Contents, notiReducer } from '../noitce/noticeData';
import Subnav from "../../common/Subnav";

export default function NoticeDetail() {

  const [state, dispatch] = useReducer(notiReducer, Contents);
  const { notis } = state;
  const { id } = useParams();


  return (
    <section className="w1440 flex pa55 noticeDetailWrap">
      {/* <Subnav/> */}
      <div className="noticeDetail">
        <h2 className="noticeTit">공지사항 & 이벤트</h2>
        <div>
          <h3>{notis[id].notiName}</h3>
          <ul className="flex">
            <li>등록일</li>
            <li>{notis[id].date}</li>
            <li>조회수</li>
            <li>{notis[id].views}</li>
          </ul>
          <p>{notis[id].notiText}</p>
        </div>
      </div>
    </section>
  );
}

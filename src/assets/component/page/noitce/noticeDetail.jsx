import "./noticeStyle.css";
import { useParams } from "react-router-dom";

export default function NoticeDetail() {


    const { id } = useParams();
  

  return (
    <section className="w1440">
      <h2 className="noticeTit">공지사항 & 이벤트</h2>
      <p>제목 {id}</p>
    </section>
  );
}

import "./learningStyle.css";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { StampV, StampL, StampP, StampB } from "../../img/img";

export default function LearningAttendance() {

  const [value, onChange] = useState(new Date());

  const dayList = [
    '2024-07-02',
    '2024-07-03',
    '2024-07-04',
    '2024-07-05',
  ];


  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = []
    const stamp = [StampB, StampL, StampP, StampV]

    let randomNumber = Math.floor(Math.random() * 3);

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
      contents.push(
        <img src={stamp[randomNumber]} alt="stamp" key={randomNumber}/>
      );
    }
    return <div className="flex stampWrap">{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };


  return (
    <div className="calendarWrap">
      <h3>출석체크</h3>
      <div className="calendar">
        <Calendar
          onChange={onChange}
          value={value}
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
          formatDay={(locale, date) => moment(date).format("D")}
          minDetail="year"
          tileContent={addContent}
        />
      </div>
      <div className="goodJob">
      <ul>
        <li>잘 하 고 있 어 요!</li>
        <li>이번 달 출석 횟수는 <span>4번</span></li>
      </ul>
      </div>
    </div>
  );
}

import "./learningStyle.css";
import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

export default function LearningAttendance() {
  const [value, onChange] = useState(new Date());


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
        />
      </div>
    </div>
  );
}

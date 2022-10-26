import styled from "@emotion/styled";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// const CalendarContainer = styled.div`
//   width: 187px;
//   height: 184px;
//   border-radius: 10px;
//   /* overflow: hidden; */
//   position: absolute;
//   top: 75px;
//   right: 0;
//   box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
//   backdrop-filter: blur(2px);
//   border-radius: 10px;
// `;

const CalendarUI = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Calendar
      onChange={onChange}
      defaultValue={value}
      value={value}
      locale="ko-KR"
      defaultView="month"
      className="react-calendar"
      // tileContent={({ date, view }) => <span>{date.getDate()}</span>}
    />
  );
};

export default CalendarUI;

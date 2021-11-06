import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import axios from '../axios';
import ClassCard from "../components/shared/ClassCard";

export default function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const [classList, setClassList] = useState([]);
  async function getClasses(value) {
    const date = new Date(value).valueOf();
    const url = "/classes/" + date;

    const response = await axios.get(url).then((result) => {
      // get all class id's user is in
      // console.log("callll");
      // console.log(result.data);
      result.data.forEach((item) => {
        setClassList(oldArr => [...oldArr, {
          name: item.title,
          time: item.date,
          location: "Frist 212", 
          classId: item._id,
          image: item.image
        }])
      }); 
      // result.data.forEach(class => {
      //   setClassList((currList) => [...currList,
      //     class
      //   ])
      // });

    });
    return response;
  }
  useEffect(() => {
    getClasses()
  }, []);

  return (
    <div>
      <Calendar
        className={"react-calendar"}
        onChange={(value) => getClasses(value)}
        value={value}
      />

      <div style={{display:"flex"}}> 
      {
        classList.map((c, index) => {
          console.log(c)
          return <ClassCard class={c} key={index + c} />;
        })
        }
      </div>
    </div>

  );
}



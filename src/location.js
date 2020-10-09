import React, { useState} from 'react';
import Time from './Time';


function Location(){

 const dateBuilder = (d) => {
   let months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
   ];
   let days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
   ];

   let day = days[d.getDay()];
   let date = d.getDate();
   let month = months[d.getMonth()];
   let year = d.getFullYear();

   return `${day} ${date} ${month} ${year}`;
 };


    return (
      <div>
        <div className="location-box">
          <div className="location">Accra, Ghana</div>
          <div className="date">{dateBuilder(new Date())}</div>
          <Time />
        </div>

      </div>
    );
}

export default Location;
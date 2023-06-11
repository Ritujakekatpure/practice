import React, { useState } from 'react';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    const selected = new Date(event.target.value);
    const today = new Date();
  
    if (selected >= today) {
      setSelectedDate(selected);
    } else {
      console.log("Invalid date");
    }
  };

  return(



  );
};
export default Date;
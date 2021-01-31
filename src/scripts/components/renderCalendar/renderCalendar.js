const renderCalendar = () => {
  const appRoot = document.getElementById("appRoot");
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appRoot.append(calendarContainer);
  // let currentDate = new Date();
};

export default renderCalendar;

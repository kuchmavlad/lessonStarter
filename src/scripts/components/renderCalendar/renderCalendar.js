const renderCalendar = ({ appElement, currentDate }) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);







let options = { weekday:'short' };
let nowDate = currentDate;
let nowYear = nowDate.getFullYear();
let nowMonth = nowDate.getMonth();
let nowDay = nowDate.getDay();
let lastMonthDay = new Date(nowYear, nowMonth + 1 , 0).getDate();

for (let i = 1; i <= lastMonthDay; i++) {

	// create th
	let newTh = document.createElement('th');
	let firstSpan = document.createElement('span');
		firstSpan.classList.add("calendar__date");
		firstSpan.innerHTML = new Date(nowYear, nowMonth, i).toLocaleDateString('en-US', options);
	let secondSpan = document.createElement('span');
		secondSpan.classList.add("calendar__day");
		secondSpan.innerHTML = i;

	// push th
	newTh.append(firstSpan);
	newTh.append(secondSpan);
	calendarHead.append(newTh);

	// dayoffs
	if ( new Date(nowYear, nowMonth, i).getDay() == 6 || new Date(nowYear, nowMonth, i).getDay() == 0 ) {
		newTh.classList.add("dayOff");
	};

};

};

export default renderCalendar;

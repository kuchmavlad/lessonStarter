const renderBar = ({ appElement, currentDate }) => {

  let options = { year:'numeric', month:'long' };

	let calendarToolbar = document.createElement('div');
	calendarToolbar.classList.add("calendarBar");

  function createDate( date ) {

      let nowDate = date;

      // create month
      const calendarMouth = document.createElement("div");
      calendarMouth.classList.add("calendar__month");
      calendarMouth.innerHTML = currentDate.toLocaleDateString('en-US', options);
      calendarToolbar.prepend(calendarMouth);

      // create prev
      let calendarPrev = document.createElement("div");
      calendarPrev.classList.add("calendar__prev");
      calendarPrev.innerHTML = 'prev';
      calendarToolbar.prepend(calendarPrev);

      // create next
      let calendarNext = document.createElement("div");
      calendarNext.classList.add("calendar__next");
      calendarNext.innerHTML = 'next';
      calendarToolbar.append(calendarNext);

      appElement.prepend(calendarToolbar);

  };

  createDate(currentDate);







  // calendarNext.addEventListener('click', function (e) {
  //   console.log('next');
  // });

};

export default renderBar;

import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

const renderApp = () => {
  const appElement = document.getElementById("appRoot");
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  renderCalendar({ appElement, currentDate });
  renderBar({ appElement, currentDate });

    document.querySelector('.calendar__prev').addEventListener('click', function (e) {
      appElement.innerHTML = '';
      let currentDate = new Date(currentYear, currentMonth - 1 );

      renderCalendar({ appElement, currentDate });
      renderBar({ appElement, currentDate });
  });

  document.querySelector('.calendar__next').addEventListener('click', function (e) {
    appElement.innerHTML = '';
    let currentDate = new Date(currentYear, currentMonth + 1 );

    renderCalendar({ appElement, currentDate });
    renderBar({ appElement, currentDate });
});
};




export default renderApp;

const renderBar = ({ appElement, currentDate }) => {
  const calendarToolbar = document.createElement("div");
  calendarToolbar.classList.add("calendarBar"); // Add class example
  // here toolBar content rendering
  appElement.prepend(calendarToolbar);
};

export default renderBar;

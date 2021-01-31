import '../styles/index.scss';
import { renderCalendar } from "./components";

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

renderCalendar();
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const date = document.getElementById('date');

const getCurrentDate = function () {
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
};

const getDate = () => getCurrentDate();
export default getDate;
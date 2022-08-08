// import {DateTime} from '../node_modules/luxon/src/luxon.js'
// const date = document.getElementById('date')
import {DateTime} from '../node_modules/luxon/src/luxon.js'
 const getDate = () => {
    return date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
}

export default getDate
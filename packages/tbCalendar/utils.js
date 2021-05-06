/*
 * @Author: your name
 * @Date: 2019-05-19 19:57:21
 * @LastEditTime: 2021-05-06 13:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-date-picker-master/src/assets/js/utils.js
 */
const englishMonthList = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月'
];

const getNewDate =  (date) => {
 let year = date.getFullYear();
 let month = date.getMonth();
 let day = date.getDate();
 return {year, month, day};
}

const getDate = (year, month, day) => {
  return new Date(year, month, day);
}

const englishMonth = (month) => {
  let engMonth;

  englishMonthList.map(() => {
    engMonth = englishMonthList[month]
  });
  return engMonth
}

const formatDate = (date) => {
  date = Number(date);
  return date < 10? `0${date}`:date;
}
export {
  getNewDate,
  getDate,
  englishMonth,
  formatDate
}
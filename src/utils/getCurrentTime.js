const getCurrentTime = () => {
  let today = new Date();
  let year = String(today.getFullYear());
  let month = String(today.getMonth() + 1);
  let day = String(today.getDate());
  let min = String(today.getMinutes());
  let seg = String(today.getSeconds());
  let hour = String(today.getHours());

  // if (parseInt(month) < 10) {
  //   month = "0" + month;
  // }
  // if (parseInt(day) < 10) {
  //   day = "0" + day;
  // }

  const totalHours = hour + ":" + min + ":" + seg;
  const totalYear = year + "-" + month + "-" + day;

  return totalYear + " " + totalHours;
};

export default getCurrentTime;

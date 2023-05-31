let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

const GetCurrentDate = {
    TodayDate: `${year}-${month<10?`0${month}`:`${month}`}-${date}`
}

export default GetCurrentDate;

//Date 함수값을 가공하여 시간을 return 해주는 모듈
const date = new Date();
const t_year = date.getFullYear();        //년
const t_month = (date.getMonth() + 1);    //월
const t_date = date.getDate();            //일
let t_day = ""                            //요일
switch(date.getDay()) {
    case(0):
    t_day = "일";
    break;
    case(1):
    t_day = "월";
    break;
    case(2):
    t_day = "화";
    break;
    case(3):
    t_day = "수";
    break;
    case(4):
    t_day = "목";
    break;
    case(5):
    t_day = "금";
    break;
    case(6):
    t_day = "토";
    break;
}
const t_time = (date.getHours() >= 13) ? (date.getHours() - 12) : date.getHours();  //시간 (12시간제)
const t_AmPm = (date.getHours() >= 13) ? "오후" : "오전";                            //오전, 오후
const t_minutes = date.getMinutes();


function getDateEasy() {
    const result = t_year + ". " + t_month + ". " + t_date + " (" + t_day + ") | " + t_AmPm + " " + t_time + "시 " + ((t_minutes == 0) ? "" : (t_minutes + "분"));
    return result; 
};


export {getDateEasy};
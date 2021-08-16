
const countDown = document.getElementById('countDown');
countDown.classList.add("countDown");

setInterval(() => {
    let now = moment();
    let date = moment([2021, 10, 17]);

    let sec = date.diff(now, 's') % 60;
    let min = date.diff(now, 'm') % 60;
    let hour = date.diff(now, 'h') % 24;
    let day = date.diff(now, 'd');
    countDown.textContent = `りかたんの結婚式まで あと${day} 日 ${hour} 時間 ${min} 分 ${sec} 秒`;

}, 1000);


// const kariyushi = document.getElementById("kariyushi");
// const weatherText = document.createElement("p");
// weatherText.classList.add("weatherText");
// weatherText.textContent = "※結婚式当日は かりゆしウェアで参加だよ";
// kariyushi.appendChild(weatherText);


// dateSearch.addEventListener('click', () => {

//     setInterval(() => {
//         const dateSet = document.getElementById('dateSet').value;

//         let now = moment();
//         let date = moment(dateSet);

//         // console.log(now)
//         // console.log(date);

//         let sec = date.diff(now, 's') % 60;
//         let min = date.diff(now, 'm') % 60;
//         let hour = date.diff(now, 'h') % 24;
//         let day = date.diff(now, 'd');
//         birth.textContent = `りかたんの結婚式までまで あと${day} 日 ${hour} 時間 ${min} 分 ${sec} 秒`;

//         // console.log(sec);
//         // console.log(min);
//         // console.log(hour);
//         // console.log(day);

//     }, 1000);
// });
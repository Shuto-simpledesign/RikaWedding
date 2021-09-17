
const countDown = document.getElementById('countDown');
countDown.classList.add("countDown");

setInterval(() => {
    let now = moment();

    let date = moment([2021, 9, 17]);

    let sec = date.diff(now, 's') % 60;
    let min = date.diff(now, 'm') % 60;
    let hour = date.diff(now, 'h') % 24;
    let day = date.diff(now, 'd');
    countDown.textContent = `りかたんの結婚式まで あと${day} 日 ${hour} 時間 ${min} 分 ${sec} 秒`;

}, 1000);



function showElementAnimation() {

    const element = document.getElementsByClassName('js-animation');
    if (!element) return; // 要素がなかったら処理をキャンセル

    const showTiming = window.innerHeight > 768 ? 300 : 40; // 要素が出てくるタイミングはここで調整
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;

    for (let i = 0; i < element.length; i++) {
        let elemClientRect = element[i].getBoundingClientRect(); let elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
            // 上にスクロールして再度非表示にする場合はこちらを記述
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);




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
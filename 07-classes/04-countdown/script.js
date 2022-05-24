import Countdown from './countdown.js';

const  diasParaNatal = new Countdown('15 April 2022 00:00:00 GMT+02');

console.log(diasParaNatal._timestampDiff)
console.log(diasParaNatal.days)
console.log(diasParaNatal.hours)
console.log(diasParaNatal.minutes)
console.log(diasParaNatal.seconds)
setInterval(()=>{
    document.querySelector(".days").innerHTML = String(diasParaNatal.total.days);
    document.querySelector(".hours").innerHTML = String(diasParaNatal.total.hours);
    document.querySelector(".minutes").innerHTML = String(diasParaNatal.total.minutes);
    document.querySelector(".seconds").innerHTML = String(diasParaNatal.total.seconds);
}, 1000)

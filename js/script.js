// @author : Arjun Gautam
//querySelector Used to target the elements in the DOM 
const HOURHAND=document.querySelector("#hour");
const MINUTEHAND=document.querySelector("#minute");
const SECONDHAND=document.querySelector("#second");



function runTheClock(){

    // if we want to use this animation  /* transition:transform .5s ease-in-out; */

    //solving return to zero problem 

    // secondPosition=secondPosition+6;
    // minutePosition=minutePosition+(1/60)*6;
    // hourPosition=hourPosition+(30/3600);


    var date=new Date();
console.log(date)
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
console.log("Hour:"+hr+" minute"+min+" second:"+sec);

let hourPosition=(hr*360/12)+(min*(360/60)/12);
let minutePosition=(min*360/60)+(sec*(360/60)/60);
let secondPosition=sec*360/60;

HOURHAND.style.transform="rotate("+hourPosition+"deg)";

MINUTEHAND.style.transform="rotate("+minutePosition+"deg)";

SECONDHAND.style.transform="rotate("+secondPosition+"deg)";
}
// Set Interval method 
// rerun in ever 1000 milisecond i.e 1 sec 
// reference :https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

var interval=setInterval(runTheClock,1000)
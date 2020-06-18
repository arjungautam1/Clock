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

function showTime()
{
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="AM";

    if(h==0)
    {
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h=(h<10) ? "0" +h : h;
    m=(m<10) ? "0" +m : m;
    s=(s<10) ? "0" +s : s;

    var time=h+":"+m+":"+s+" "+session;
    document.getElementById("MyClockDisplay").innerText=time;
    document.getElementById("MyClockDisplay").textContent=time;
    //setTimeout(showTime,1000) Also can be used instead of setInterval 
}
showTime();
setInterval(showTime,1000);

document.getElementById("MyProfile").innerHTML="By Arjun Gautam "

document.getElementById("WatchName").innerHTML="LASER"

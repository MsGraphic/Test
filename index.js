sec=0;
min=0;
h=0;
s=null;
check = false;
const text = document.querySelector(".T");

function Time()
{

    console.clear();
    sec=sec+1;
    if (sec < 10 && min < 10 && h < 10)
    {
        console.log(`0${h}:0${min}:0${sec}`);
        text.textContent=`0${h}:0${min}:0${sec}`;
    }
    if(sec >= 10)
    {
        console.log(`0${h}:0${min}:${sec}`);
        text.textContent=`0${h}:0${min}:${sec}`;
    }
    if(min >= 10)
    {
        console.log(`0${h}:${min}:0${sec}`);
        text.textContent=`0${h}:${min}:0${sec}`;
    }
    if(h >= 10)
    {
        console.log(`${h}:0${min}:0${sec}`);
        text.textContent=`${h}:0${min}:0${sec}`;
    }
    if( sec == 60)
    {
        sec = 0;
        min = min+1;
    }
    if( min == 60)
    {
        min = 0;
        h = h+1;
    }

};

function TimerS(){
    
    if(check == true)
    {
        sec = 0;
        min = 0;
        h = 0;
    }
    else
    {
       var s = setInterval(Time, 1000);
        check = true;
    }
};
function TimerStop()
{
    
    sec = 0;
    min = 0;
    h = 0;
    text.textContent='00:00:00';
    clearInterval(s);
};

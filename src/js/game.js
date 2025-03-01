const NULL = null; //C's coding muscule memory

alert("This game is a side project. It's still in early development phase, thus, it might be buggy and the progress could be reset with an update!\nThanks for playing and enjoy!");

const lp = document.getElementById("love_points");
const lpps = document.getElementById("love_points_ps");
let love_points = 0
let love_points_ps = 0

function clickCat()
{
    love_points++;
    return;
}

setInterval(() => {
    if (love_points_ps > 0)
        love_points += love_points_ps / 10;
    if (lp)
        lp.innerHTML = love_points.toFixed(2);
    if (lpps)
        lpps.innerHTML = love_points_ps.toFixed(2);
}, 100);

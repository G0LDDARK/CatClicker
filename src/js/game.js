"use strict";
// Alpha Alert
alert("This game is a side project. It's still in early development phase, thus, it might be buggy and (for now) no progress can be saved!\nThanks for playing and enjoy!");
// Variable initialization
// Love points related
const lp = document.querySelector("#lp_count");
const lpps = document.querySelector("#lpps");
let parsed_lp = lp ? parseFloat(lp.innerHTML) : 0;
let parsed_lpps = lpps ? parseFloat(lpps.innerHTML) : 0;
// Clicker related
const click_force_cost = document.querySelector("#click_force_cost");
const click_force_lvl = document.querySelector("#click_force_lvl");
let parsed_click_force_cost = click_force_cost ? parseFloat(click_force_cost.innerHTML) : 0;
let parsed_click_force_lvl = click_force_lvl ? parseFloat(click_force_lvl.innerHTML) : 0;
// Cuddle related
const cuddle_power_cost = document.querySelector("#cuddle_power_cost");
const cuddle_power_lvl = document.querySelector("#cuddle_power_lvl");
let parsed_cuddle_power_cost = cuddle_power_cost ? parseFloat(cuddle_power_cost.innerHTML) : 0;
let parsed_cuddle_power_lvl = cuddle_power_lvl ? parseFloat(cuddle_power_lvl.innerHTML) : 0;
// Principal functions
// Click on the cat
function cat_clicked() {
    parsed_lp = parsed_lp + 1 * parsed_click_force_lvl;
    if (lp)
        lp.innerHTML = parsed_lp.toFixed(2);
}
// Check if a purchase is possible
function check_buyable(to_buy) {
    return parsed_lp >= to_buy;
}
// Buy function
function buy(str) {
    if (str === "clicker") {
        if (check_buyable(parsed_click_force_cost)) {
            parsed_lp -= parsed_click_force_cost;
            if (lp)
                lp.innerHTML = parsed_lp.toFixed(2);
            parsed_click_force_lvl *= Math.log(2.9);
            if (click_force_lvl)
                click_force_lvl.innerHTML = parsed_click_force_lvl.toFixed(2);
            parsed_click_force_cost *= Math.log(3.1);
            if (click_force_cost)
                click_force_cost.innerHTML = parsed_click_force_cost.toFixed(2);
        }
    }
    else if (str === "cuddle") {
        if (check_buyable(parsed_cuddle_power_cost)) {
            parsed_lp -= parsed_cuddle_power_cost;
            if (lp)
                lp.innerHTML = parsed_lp.toFixed(2);
            parsed_cuddle_power_lvl = parsed_cuddle_power_lvl === 0 ? 1 : parsed_cuddle_power_lvl * Math.log(3);
            if (cuddle_power_lvl)
                cuddle_power_lvl.innerHTML = parsed_cuddle_power_lvl.toFixed(2);
            parsed_cuddle_power_cost *= Math.log(3.1);
            if (cuddle_power_cost)
                cuddle_power_cost.innerHTML = parsed_cuddle_power_cost.toFixed(2);
            parsed_lpps = parsed_cuddle_power_lvl;
            if (lpps)
                lpps.innerHTML = parsed_lpps.toFixed(2);
        }
    }
    else {
        console.warn(`Invalid upgrade type: ${str}`);
    }
}
// Clock
setInterval(() => {
    if (parsed_lpps > 0) {
        parsed_lp += parsed_lpps / 10;
        if (lp)
            lp.innerHTML = parsed_lp.toFixed(2);
    }
}, 100);

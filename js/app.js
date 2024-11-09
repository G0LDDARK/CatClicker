//Alpha Alert
//alert("This game is a side project. It's still in early development phase, thus, it might be buggy and (for now) no progress can be saved!\nThanks for playing and enjoy!")

//LOVE POINTS
let lp = document.querySelector('#lp_count');
let parsed_lp = parseFloat(lp.innerHTML);

//LOVE PONTS PER SECONDE
let lpps = document.querySelector('#lpps');
let parsed_lpps = parseFloat(lpps.innerHTML);

//CLICKERS
let click_force_cost = document.querySelector('#click_force_cost');
let parsed_click_force_cost = parseFloat(click_force_cost.innerHTML);
let click_force_lvl = document.querySelector('#click_force_lvl');
let parsed_click_force_lvl = parseFloat(click_force_lvl.innerHTML);

//CUDDLE
let cuddle_power_cost = document.querySelector("#cuddle_power_cost");
let parsed_cuddle_power_cost = parseFloat(cuddle_power_cost.innerHTML);
let cuddle_power_lvl = document.querySelector("#cuddle_power_lvl");
let parsed_cuddle_power_lvl = parseFloat(cuddle_power_lvl.innerHTML);

function incrementLP()
{
    parsed_lp = parsed_lp + (1 * parsed_click_force_lvl);
    lp.innerHTML = parsed_lp.toFixed(2);
}

function buyClicker()
{
    if (parsed_lp >= parsed_click_force_cost) {
        parsed_lp -= parsed_click_force_cost;
        lp.innerHTML = parsed_lp.toFixed(2);

        parsed_click_force_lvl = parsed_click_force_lvl * Math.log(2.9);
        click_force_lvl.innerHTML = parsed_click_force_lvl.toFixed(2);

        parsed_click_force_cost = parsed_click_force_cost * Math.log(3.1);
        click_force_cost.innerHTML = parsed_click_force_cost.toFixed(2);
    }
}

function buyCuddle()
{
    if (parsed_lp >= parsed_cuddle_power_cost) {
        parsed_lp -= parsed_cuddle_power_cost;
        lp.innerHTML = parsed_lp.toFixed(2);

        if (parsed_cuddle_power_lvl == 0) {
            parsed_cuddle_power_lvl += 1;
        } else {
            parsed_cuddle_power_lvl = parsed_cuddle_power_lvl * Math.log(3);
        }
        cuddle_power_lvl.innerHTML = parsed_cuddle_power_lvl.toFixed(2);

        parsed_cuddle_power_cost = parsed_cuddle_power_cost * Math.log(3.1);
        cuddle_power_cost.innerHTML = parsed_cuddle_power_cost.toFixed(2);

        parsed_lpps = parsed_cuddle_power_lvl;
        lpps.innerHTML = parsed_lpps.toFixed(2);
    }
}

setInterval(() => 
{
    little_anti_cheat();
    if (parsed_lpps > 0) {
        parsed_lp += parsed_lpps / 10;
        lp.innerHTML = parsed_lp.toFixed(2);
    }
}, 100)

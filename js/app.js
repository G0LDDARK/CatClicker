//Alpha Alert
alert("This game is a side project. It's still in early devloppent phase, thus, it might be buggy and (for now) no progression can be saved! \nThanks for playing and enjoy !")

//Seting up Love Points
let lp = document.querySelector('#lp_count');
let parsedLp = parseFloat(lp.innerHTML);

//Seting up cost of clickers
let click_force_cost = document.querySelector('#click_force_cost');
let parsed_click_force_cost = parseFloat(click_force_cost.innerHTML);

//Seting up level of clickers 
let click_force_lvl = document.querySelector('#click_force_lvl');
let parsed_click_force_lvl = parseFloat(click_force_lvl.innerHTML);

//Cat click incrementation
function incrementLP() {
    parsedLp = parsedLp + (1 * parsed_click_force_lvl);
    console.log(parsedLp); 
    lp.innerHTML = parsedLp.toFixed(2);
}

function buyClicker() {
    if (parsedLp >= parsed_click_force_cost) {
        //Remove LP
        parsedLp -= parsed_click_force_cost;
        lp.innerHTML = parsedLp.toFixed(2);
        //Adding clicker
        parsed_click_force_lvl = parsed_click_force_lvl * 1.15;
        click_force_lvl.innerHTML = parsed_click_force_lvl.toFixed(2);
        //Increasing price
        parsed_click_force_cost = parsed_click_force_cost * 1.25;
        click_force_cost.innerHTML = parsed_click_force_cost.toFixed(2); 
    }
}

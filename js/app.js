let lp = document.querySelector('#lp-count');
let click_multiplier = 1;
let click_cost = document.querySelector('#click_cost');

function incrementLP() {
    lp.innerHTML = parseFloat(lp.innerHTML) + 1 * click_multiplier;
    lp.innerHTML = parseFloat(lp.innerHTML).toFixed(1);
}
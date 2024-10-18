let lp = document.querySelector('#lp-count');
let parsedLp = parseFloat(lp.innerHTML);

let clickers = document.querySelector('#clicker_cost');
let parsedClickersCost = parseFloat(clickers.innerHTML);

function incrementLP() {
    parsedLp += 1;
    lp.innerHTML = parsedLp
}

function buyClicker() {
    if (parsedLp >= parsedClickersCost) {
        parsedLp -= parsedClickersCost;
        lp.innerHTML = parsedLp
    }
}

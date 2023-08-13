let player = {
    name: "sid",
    chips: 90,
}
let playerEl = document.getElementById('p-id');
playerEl.textContent = player.name + " $:" + player.chips;

let sum = 0;
let message = "";
let hasblackjack = false;
let isAlive = false;
let sumEl = document.getElementById("sum-El");
let messageEl = document.getElementById('message-el');
let cardEl = document.getElementById('card-El');
let card = [];


function startgame() {
    isAlive = true;
    let firstcard = random();
    let secondcard = random();
    sum = firstcard + secondcard;
    card = [firstcard, secondcard];
    rendergame();

}

 
function random() {
    let a = Math.floor(Math.random() * 13) + 1;
    if (a === 1) {
        return 11;
    }
    else if (a > 10) {
        return 10;
    }
    else {
        return a;
    }
}


function rendergame() {
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Card: ";
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " ";

    }

    if (sum < 21) {
        message = "Want to take another card";

    }
    else if (sum === 21) {
        message = "You got Blackjack";
        hasblackjack = true;
    }
    else {
        message = "Sorry! you are out";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newcard() {
    if (isAlive === true && hasblackjack === false) {
        let thirdcard = random();
        sum = sum + thirdcard;
        card.push(thirdcard);
        rendergame();
    }
}

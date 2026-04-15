function addTrade() {
let user = localStorage.getItem("user");

let stock = document.getElementById("stock").value;
let buyPrice = document.getElementById("buyPrice").value;
let sellPrice = document.getElementById("sellPrice").value;
let qty = document.getElementById("qty").value;
let date = document.getElementById("date").value;
let tag = document.getElementById("tag").value;

if (!stock || !buyPrice || !sellPrice || !qty || !date) {
alert("Fill all fields");
return;
}

let trade = {
stock,
buyPrice: Number(buyPrice),
sellPrice: Number(sellPrice),
qty: Number(qty),
date,
tag
};

let key = "trades_" + user;
let trades = JSON.parse(localStorage.getItem(key)) || [];

trades.push(trade);

localStorage.setItem(key, JSON.stringify(trades));

alert("Trade Saved");

document.getElementById("stock").value = "";
document.getElementById("buyPrice").value = "";
document.getElementById("sellPrice").value = "";
document.getElementById("qty").value = "";
document.getElementById("date").value = "";
}

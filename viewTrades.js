let user = localStorage.getItem("user");

if (!user) {
window.location.href = "login.html";
}

let key = "trades_" + user;
let trades = JSON.parse(localStorage.getItem(key)) || [];

let table = document.getElementById("tradeTable");

trades.forEach((trade, index) => {
let row = table.insertRow();

row.insertCell(0).innerText = trade.stock;
row.insertCell(1).innerText = trade.buyPrice;
row.insertCell(2).innerText = trade.sellPrice;
row.insertCell(3).innerText = trade.qty;
row.insertCell(4).innerText = trade.date;
row.insertCell(5).innerText = trade.tag;

let actionCell = row.insertCell(6);
actionCell.innerHTML = `<button onclick="deleteTrade(${index})">Delete</button>`;
});

function deleteTrade(index) {
let user = localStorage.getItem("user");
let key = "trades_" + user;

let trades = JSON.parse(localStorage.getItem(key)) || [];

trades.splice(index, 1);

localStorage.setItem(key, JSON.stringify(trades));

location.reload();
}

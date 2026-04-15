let user = localStorage.getItem("user");

if (!user) {
window.location.href = "login.html";
} else {
document.getElementById("welcomeUser").innerText = "Welcome, " + user;
}

// Logout
function logout() {
localStorage.removeItem("user");
window.location.href = "login.html";
}

let key = "trades_" + user;
let trades = JSON.parse(localStorage.getItem(key)) || [];

let totalTrades = trades.length;
let totalProfit = 0;
let winTrades = 0;

trades.forEach(trade => {
let profit = (trade.sellPrice - trade.buyPrice) * trade.qty;
totalProfit += profit;

if (profit > 0) {
winTrades++;
}
});

let winRate = totalTrades > 0 ? (winTrades / totalTrades) * 100 : 0;

document.getElementById("totalTrades").innerText = totalTrades;

let profitEl = document.getElementById("totalProfit");
profitEl.innerText = "₹ " + totalProfit;

if (totalProfit >= 0) {
profitEl.style.color = "lightgreen";
} else {
profitEl.style.color = "red";
}

document.getElementById("winRate").innerText = winRate.toFixed(2) + "%";

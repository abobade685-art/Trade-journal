function login() {
let name = document.getElementById("username").value.trim();

if (name === "") {
alert("Enter your name");
return;
}

// Save user
localStorage.setItem("user", name);

// Debug check
console.log("User saved:", name);

// Redirect
window.location.href = "index.html";
}

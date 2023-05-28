let checkUser = JSON.parse(localStorage.getItem("checkUserLogin"));
if (!checkUser) {
    alert("pehla login to kar");
    window.location.href="index.html"
}
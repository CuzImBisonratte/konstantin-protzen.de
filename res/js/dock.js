
function update_lockTime() {
    var date = new Date();
    // Time
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("dock-time").innerHTML = hours + ":" + minutes + ":" + seconds;
    // Date
    var dom = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    document.getElementById("dock-date").innerHTML = dom + "." + month + "." + year;
}

setInterval(update_lockTime, 500);
update_lockTime();
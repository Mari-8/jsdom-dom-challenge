
let timerCount = document.getElementById('counter')
let currentTime = document.getElementById('counter').innerHTML
let plusButt = document.getElementById('plus')
let minusButt = document.getElementById('minus')
let intervalID = window.setInterval(timer(), 1000);

plusButt.addEventListener("click", function(event) {
    timerCount.innerHTML = currentTime++
})

minusButt.addEventListener("click", function(event) {
    timerCount.innerHTML = currentTime--
})

setInterval(timer, 1000);

function timer() {
    timerCount.innerHTML = currentTime++
}
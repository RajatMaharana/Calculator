let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            let val = eval(value.innerHTML);
            if (val % 1 !== 0) {
                value.innerHTML = val.toFixed(2);
            } else {
                value.innerHTML = val;
            }
        } else {
            if (this.innerHTML == "Clear") {
                value.innerHTML = "";
            }
            else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}

toggleBtn.onclick = function () {
    body.classList.toggle('dark');
}
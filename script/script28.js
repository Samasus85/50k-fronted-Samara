// let title = document.getElementsByClassName('main-card-title');
// console.log(title[1].innerHTML)

let addBtn = document.getElementsByClassName('add-to-card');
let myFunction = function () {
    let title = this.parentNode.parentNode.getElementsByClassName('main-card-title');
    console.log(title[0].innerText);
}

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', myFunction, false)
}
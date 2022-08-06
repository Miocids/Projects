const colors = ["red","green","gray","blue","slateblue","yellow","orange","black","white"];
const btn = document.getElementById("button");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];


})


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
// JavaScript source code

const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const floatContainer = document.querySelector(".float-container");

btn.addEventListener("click", function () {
    floatContainer.classList.add("open-float-container");
})

closeBtn.addEventListener("click", function () {
    floatContainer.classList.remove("open-float-container");
})


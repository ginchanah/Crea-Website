// JavaScript Document
console.log("hi");


let menuButton = document.querySelector("header section button")
let menuList = document.querySelector("header ul")

menuButton.onclick = showMenu;

function showMenu(){
    menuList.classList.toggle("show")
    console.log("Menu button clicked")  
}
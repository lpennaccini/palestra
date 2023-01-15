//menu
var mainMenu = document.querySelector('.main-menu');

document.querySelector('.btn-open-menu').onclick = () =>{
    mainMenu.classList.toggle('menu-is-active');
}
document.querySelector('.btn-close-menu').onclick = () =>{
    mainMenu.classList.remove('menu-is-active');
}
window.onscroll = () =>{
    mainMenu.classList.remove('menu-is-active');
}

const topButton = document.getElementById("top-button");
const headerBar = document.querySelector(".header");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    headerBar.classList.add('bg-dark');
  } else {
    topButton.style.display = "none";
    headerBar.classList.remove('bg-dark');
  }
};

topButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
let loadingNumber = document.getElementById("loading-number");
let loader = JSON.parse(window.localStorage.getItem("loader"));
let zero = document.getElementById("zero");
let preloader = document.querySelector(".preloader");
if (loadingNumber) {
  if (loader == null) {
    let inc = 0;
    setInterval(() => {
      if (inc < 100) {
        if (inc > 8) {
          zero.innerHTML = "";
        }
        inc += 1;
        loadingNumber.innerHTML = inc;
      } else {
        preloader.classList.add("hide");
        window.localStorage.setItem("loader", JSON.stringify(false));
        return;
      }
    }, 100);
  }else{
      preloader.innerHTML = ''
    preloader.classList.add("d-none")
  }
}


// more section begin
let moreButton = document.getElementById("more-button") 
let moreSection = document.querySelector(".more-section")
if (moreButton) {
  moreButton.addEventListener("click",()=>{
    moreButton.parentElement.classList.add("d-none")
    moreSection.classList.remove("d-none")
  }) 
} 

// more section end


// let themeButton = document.getElementById("theme-button")
const themeChange =()=>{
  document.documentElement.style.setProperty('--color-primary', 'black');
  document.documentElement.style.setProperty('--color-black', 'white');
  document.documentElement.style.setProperty('--color-secondary', 'rgb(45 45 45)');
}
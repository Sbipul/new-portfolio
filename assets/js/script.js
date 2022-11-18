let loadingNumber = document.getElementById("loading-number");
let loader = JSON.parse(window.localStorage.getItem("loader"));
let zero = document.getElementById("zero");
let preloader = document.querySelector(".preloader");
console.log(loader);
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

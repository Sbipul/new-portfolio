const header = document.querySelector(".header");
if(header){
  header.innerHTML = `<div class="container">
  <div class="row align-items-center">
    <div class="col-8">
      <div class="row">
        <div class="col-4 col-lg-2">
          <a href="./index.html">portfolio</a>
        </div>
        <div class="col-4 col-lg-2">
          <a href="./about.html">about</a>
        </div>
        <div class="col-4 col-lg-2">
        <a href="./contact.html">contact</a>
        </div>
      </div>
    </div>
    <div class="col-4 text-end">
      <button class="border-0 bg-transparent">download</button>
    </div>
  </div>
  </div>`
}

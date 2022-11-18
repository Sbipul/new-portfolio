const banner = document.querySelector(".banner")
if (banner) {
  banner.innerHTML = `<div class="container">
<div class="row">
  <div class="col-12 col-lg-6">
    <div class="banner-text">
      <h1>
        hi, i am bipul. <br />
        react developer
      </h1>
      <!-- <p>Do you want to expand your perspective? Access the US exchanges and the cryptocurrency market by opening your own multi-currency account</p> -->
      <p>
        i am work with a company as junior software engineer.i try
        to explore new learning things and facing challange everyday
        to upgrade my skils
      </p>
      <div class="banner-buttons">
        <button><a href="./contact.html">contact me</a></button>
        <button><a target="_blank" href="#">resume</a></button>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-6 hide-small">
    <div class="row">
      <div class="col-6">
        <div
          class="banner-image-container ms-auto first-banner-image-container"
        >
          <img
            class="grayscale"
            src="./assets/images/20221118_110804.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="col-6">
        <div class="banner-image-container">
          <img
            class="grayscale"
            src="./assets/images//img1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
</div>`
}

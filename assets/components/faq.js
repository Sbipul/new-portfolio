const faq = document.querySelector(".faq")
if (faq) {
  faq.innerHTML = `<div class="container">
<div class="faq-container">
  <div class="row align-items-center">
    <div class="col-7">
      <h2>Any Question</h2>
      <p>
        Answers are just an email away. Drop us a line and the right
        person will get back to you as soon as possible
      </p>
      <div class="banner-buttons">
        <button><a href="./contact.html">ask question</a></button>
      </div>
    </div>
    <div class="col-5">
      <div class="faq-image">
        <img
          src="./assets/images/Capture-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</div>`
}

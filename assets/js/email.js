const btn = document.getElementById("button");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById("user_email");
const message = document.getElementById("message");
let abouseWord = ['hello','hala']
let word = '';
message.addEventListener("keypress",(e)=>{
  if (e.keyCode === 32) {
    word = e.target.value;
    // abouseWord.map(a=> (a.toLocaleLowerCase() === e.target.value) ? e.target.value = '***' : e.target.value)
  }
  console.log(word)
})
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = /(?!.*[A-Z]{2})(?!.*[^A-Za-z][ -])(?!.* ([^A-Z]|$))(?!.*-([^a-z]|$))^[A-Z].{2,19}$/.test(user_name.value);
    let email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(user_email.value);
    if (!name) {
      toastSuccess('error','Invalid format of name','top-end');
      user_name.value = '',
      user_email.value = '';
      message.value = '';
      return
    }else if(!email){
      toastSuccess('error','Invalid format of email','top-end');
      user_name.value = '',
      user_email.value = '';
      message.value = '';
      return
    }else if(message.value.length < 10){
      toastSuccess('error','Min 10 letter required','top-end');
      user_name.value = '',
      user_email.value = '';
      message.value = '';
      return
    }

    btn.value = "Sending...";
    const serviceID = "service_9f8d267";
    const templateID = "template_2j0y6u8";
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        toastSuccess('success','Successfull email sent','top-end')
        user_name.value = '',
        user_email.value = '';
        message.value = '';
      },
      (err) => {
        btn.value = "Send Email";
        toastSuccess('error',JSON.stringify(err),'top-end');
        user_name.value = '',
        user_email.value = '';
        message.value = '';
      }
    );


});
      

const toastSuccess = (icon, message, position) => {
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: message,
  });
};


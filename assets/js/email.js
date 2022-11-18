const btn = document.getElementById("button");
      document
        .getElementById("form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          btn.value = "Sending...";
          const serviceID = "service_9f8d267";
          const templateID = "template_2j0y6u8";
          emailjs.sendForm(serviceID, templateID, this).then(
            () => {
              btn.value = "Send Email";
              toastSuccess('success','Successfull email sent','top-end')
            },
            (err) => {
              btn.value = "Send Email";
              alert(JSON.stringify(err));
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
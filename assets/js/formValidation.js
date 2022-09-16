(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        // disable submit button to avoid further requests
        form.submitButton.disabled = true;

        // show/hide elements
        function showHide(elem, visible) {
          switch (visible) {
            case "show":
              document.getElementById(elem).classList.remove("d-none");
              break;
            case "hide":
              document.getElementById(elem).classList.add("d-none");
              break;
            default:
              break;
          }
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          showHide("submitErrorMessage", "show");
          showHide("submitSuccessMessage", "hide");
          form.submitButton.disabled = false;
        }

        form.classList.add("was-validated");

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
          // Submit form using fetch
          fetch("https://formsubmit.co/ajax/fa4014554e28f76d85472fa52d5e20a0", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              _subject: form._subject.value,
              _honey: form._honey.value,
              name: form.name.value,
              email: form.email.value,
              tel: form.tel.value,
              message: form.message.value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              showHide("submitErrorMessage", "hide");
              showHide("submitSuccessMessage", "show");

              form.classList.remove("was-validated");
              form.name.value = "";
              form.email.value = "";
              form.tel.value = "";
              form.message.value = "";
              form.invalidCheck.checked = false;
              form.submitButton.disabled = false;
            })
            .catch((error) => {
              console.log(error);
              showHide("submitErrorMessage", "show");
              form.submitButton.disabled = false;
            });
        }
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    // const email = document.getElementById("email").value.trim();
    // const phone = document.getElementById("phone").value.trim();
    // const address = document.getElementById("address").value.trim();

    if (firstName === "") {
      document.getElementById("firstNameError").innerText =
        "First Name required";
      return;
    } else {
      document.getElementById("firstNameError").innerText = "";
    }

    if (lastName === "") {
      document.getElementById("lastNameError").innerText = "Last Name required";
      return;
    } else {
      document.getElementById("lastNameError").innerText = "";
    }

    // Similarly, add validation for other fields like email, phone, and address

    // If all validations pass, you can submit the form
    form.submit();
  });
});

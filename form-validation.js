document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isFormValid = true;

    const fields = [
      { id: "firstName", message: "First Name required" },
      { id: "lastName", message: "Last Name required" },
      { id: "email", message: "Email required" },
      { id: "phone", message: "Phone required" },
      { id: "address", message: "Address required" },
      { id: "propertyType", message: "Property Type required" },
      { id: "city", message: "City required" },
      { id: "state", message: "State required" },
      { id: "zip", message: "Zip required" },
      { id: "cardNumber", message: "Card Number required" },
      { id: "currentHomeValue", message: "Home Value required" },
      { id: "remainingBalance", message: "Remaining Balance required" },
      { id: "cashOutAmount", message: "Cash Out Amount required" },
    ];

    fields.forEach(({ id, message }) => {
      const value = document.getElementById(id).value.trim();
      const errorElement = document.getElementById(`${id}Error`);

      if (value === "") {
        errorElement.innerText = message;
        isFormValid = false;
      } else {
        errorElement.innerText = "";
      }
    });

    if (isFormValid) {
      const formData = {};
      fields.forEach(({ id }) => {
        formData[id] = document.getElementById(id).value.trim();
      });

      //   alert(JSON.stringify(formData));

      // Submit the form
      // form.submit();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm"),
          orderConfirmation = document.getElementById("orderConfirmation"),
          newOrderButton = document.getElementById("newOrderButton");

          orderForm.addEventListener("submit", e => {
            e.preventDefault();

          const get = id => document.getElementById(id).value.trim();
          const firstName = get("firstName"),
          lastName = get("lastName"),
          address = get("address"),
          phone = get("phone"),
          size = document.getElementById("size").value,
          sugars = document.getElementById("sugars").value,
          glasses = parseInt(document.getElementById("glasses").value) || 1;

          if (!firstName || !lastName || !address || !phone) {
            alert("Please fill out all required fields.");
            return;
          }
          const fruits = [];
          document.querySelectorAll('input[name="fruits"]:checked').forEach(input => {
          fruits.push(input.value);
          });

          const toppings = [];
          document.querySelectorAll('input[name="toppings"]:checked').forEach(input => {
          toppings.push(input.value);
        });



        });
          
  });
  
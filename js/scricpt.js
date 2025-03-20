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

        });
          
  });
  
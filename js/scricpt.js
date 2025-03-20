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
        const basePrice = size = "small" ? 3.0 : size = "large" ? 6.0 : 4.5,
        pricePerGlass = basePrice + (fruits.length * 0.5) + (toppings.length * 0.75),
        totalPrice = (glasses * pricePerGlass).toFixed(2);

        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working
        document.getElementById("orderName").textContent = `${firstName} ${lastName}`;
        document.getElementById("orderAddress").textContent = address;
        document.getElementById("orderPhone").textContent = phone;
        document.getElementById("orderSize").textContent = size;
        document.getElementById("orderFruits").textContent = fruits.length ? fruits.join(", ") : "None";
        document.getElementById("orderToppings").textContent = toppings.length ? toppings.join(", ") : "None";
        document.getElementById("orderSugars").textContent = sugars;
        document.getElementById("orderGlasses").textContent = glasses;
        document.getElementById("orderPrice").textContent = totalPrice;

        orderForm.classList.add("hidden");
        orderConfirmation.classList.remove("hidden");
        orderForm.reset();
        });
          
  });
  
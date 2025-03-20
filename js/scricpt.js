document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm"),
          orderConfirmation = document.getElementById("orderConfirmation"),
          newOrderButton = document.getElementById("newOrderButton");

          // an event listener to handle form submission for orders
          orderForm.addEventListener("submit", e => {
            e.preventDefault();

          // collecting and storing the form data using trim
          const get = id => document.getElementById(id).value.trim();
          const firstName = get("firstName"),
          lastName = get("lastName"),
          address = get("address"),
          phone = get("phone"),
          size = document.getElementById("size").value,
          sugars = document.getElementById("sugars").value,
          glasses = parseInt(document.getElementById("glasses").value) || 1;

          // added alert if any of the input field is empty
          if (!firstName || !lastName || !address || !phone) {
            alert("Please fill out all required fields.");
            return;
          }

          // getting all selected checkboxes of fruits
          const fruits = [];
          document.querySelectorAll('input[name="fruits"]:checked').forEach(input => {
          fruits.push(input.value);
          });

          // getting all selected checkboxes of toppings
          const toppings = [];
          document.querySelectorAll('input[name="toppings"]:checked').forEach(input => {
          toppings.push(input.value);
        });

        // calculating price based on fruit, topping, size, glasses
        const basePrice = size = "small" ? 3.0 : size = "large" ? 6.0 : 4.5,
        pricePerGlass = basePrice + (fruits.length * 0.5) + (toppings.length * 0.75),
        totalPrice = (glasses * pricePerGlass).toFixed(2);

        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working

        //updating the UI, with data got from form
        document.getElementById("orderName").textContent = `${firstName} ${lastName}`;
        document.getElementById("orderAddress").textContent = address;
        document.getElementById("orderPhone").textContent = phone;
        document.getElementById("orderSize").textContent = size;
        document.getElementById("orderFruits").textContent = fruits.length ? fruits.join(", ") : "None";
        document.getElementById("orderToppings").textContent = toppings.length ? toppings.join(", ") : "None";
        document.getElementById("orderSugars").textContent = sugars;
        document.getElementById("orderGlasses").textContent = glasses;
        document.getElementById("orderPrice").textContent = totalPrice;

        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working

        //hiding the order form and showing confirmation section
        orderForm.classList.add("hidden");
        orderConfirmation.classList.remove("hidden");
        orderForm.reset();
        });

        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working
        // this portion is done by "fayzadiwan". Her Github was not working

        //hiding the confirmation section and showing order form 
        newOrderButton.addEventListener("click", () => {
          orderConfirmation.classList.add("hidden");
          orderForm.classList.remove("hidden");
        });

  });

  /*
  Attribution:-----
  All used sources in this Assignment
  https://www.w3schools.com/js/js_htmldom_eventlistener.asp
  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  https://www.w3schools.com/jsref/jsref_push.asp

  and weekly learning content
  */
  
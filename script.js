const categories = document.querySelectorAll(".category");

categories.forEach((button) => {
  button.addEventListener("click", () => {
    categories.forEach((btn) => btn.classList.remove("active")); // Remove 'active' from all
    button.classList.add("active"); // Add 'active' to the clicked button
  });
});
const menus = document.querySelectorAll(".nav-links li"); // Select <li> elements

menus.forEach((item) => {
  item.addEventListener("click", () => {
    menus.forEach((btn) => btn.classList.remove("active")); // Remove 'active' from all
    item.classList.add("active"); // Add 'active' to the clicked item
  });
});

const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

const menuItems = [
   {
    name: "Avocado",
    price: 0.75,
    image: "Image/drink/Avocado.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
   {
    name: "Green Tea",
    price: 0.75,
    image: "Image/drink/Green-tea.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
   {
    name: "Chocolate",
    price: 0.75,
    image: "Image/drink/Chocolate.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
   {
    name: "Bluebery",
    price: 0.75,
    image: "Image/drink/Bluebery.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
   {
    name: "Storbery",
    price: 0.75,
    image: "Image/drink/Storbery.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
   {
    name: "Passion",
    price: 0.75,
    image: "Image/drink/passion.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
    {
    name: "Passions",
    price: 0.75,
    image: "Image/drink/passion1.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
  {
    name: "Passion Mill",
    price: 0.75,
    image: "Image/drink/passion-mill.jpg",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
 
  {
    name: "IZE cola",
    price: 1.5,
    image: "Image/drink/ize.png",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
  {
    name: "Coca Cola",
    price: 2.0,
    image: "image/drink/coca.png",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
  {
    name: "Sting blue",
    price: 2.5,
    image: "Image/drink/stingblue.png",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
  {
    name: "Nescafe",
    price: 2.5,
    image: "Image/drink/Nescafe.png",
    sizes: ["Small", "Large"],
    category: "drink", // Added category
  },
  {
    name: "Exspresso",
    price: 0.75,
    image: "Image/Coffee/Espresso.jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
    {
    name: "Hot Latte",
    price: 0.75,
    image: "Image/Coffee/Hot Latte.jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
  {
    name: "Hot Cappuccino",
    price: 0.75,
    image: "Image/Coffee/Hot Cappuccino .jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
  {
    name: "Hot Americano",
    price: 0.75,
    image: "Image/Coffee/Hot Americano.jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
  {
    name: "Hot Latte",
    price: 0.75,
    image: "Image/Coffee/Hot Latte.jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
    {
    name: "Iced Americano",
    price: 0.75,
    image: "Image/Coffee/Iced Americano.jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
    {
    name: "Iced Latte",
    price: 0.75,
    image: "Image/Coffee/Iced Latte.jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
    {
    name: "Iced Milk",
    price: 0.75,
    image: "Image/Coffee/Iced Milk.jpg",
    sizes: ["Small", "Large"],
    category: "coffee", // Added category
  },
];

const menuContainer = document.getElementById("menu-items");

categories.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all categories and add it to the clicked one
    categories.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Get the selected category
    const selectedCategory = button.textContent.toLowerCase();

    // Filter menuItems based on category
    const filteredItems = menuItems.filter((item) => {
      return selectedCategory === "all" || item.category === selectedCategory;
    });

    // Display the filtered menu items
    displayMenu(filteredItems);
  });
});

function displayMenu(items) {
  menuContainer.innerHTML = ""; // Clear previous items

  items.forEach((item) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const defaultSize = item.sizes[0];

    menuItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="size-buttons">
        <h3 class="name">
          ${item.name}
          <p class="price"><b>$${item.price.toFixed(2)}</b></p>
        </h3>
        <div class="button-controls">
          ${item.sizes
            .map(
              (size) =>
                `<button class="size-btn ${
                  size === defaultSize ? "selected" : ""
                }">${size}</button>`
            )
            .join("")}
        </div>
        <button class="add-to-cart">Add to cart</button>
      </div>
    `;

    menuContainer.appendChild(menuItemDiv);

    menuItemDiv
      .querySelector(".add-to-cart")
      .addEventListener("click", function () {
        const selectedSize =
          menuItemDiv.querySelector(".size-buttons .selected")?.textContent ||
          defaultSize;
        addToCart(item, selectedSize);
      });

    const sizeButtons = menuItemDiv.querySelectorAll(".size-btn");
    sizeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        sizeButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  });
}

// Initial call to display all menu items
displayMenu(menuItems);
let cart = [];

// Load cart from localStorage on page load
function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  displayCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to add item to the cart
function addToCart(item, selectedSize) {
  const quantity = 1;

  const existingItemIndex = cart.findIndex(
    (cartItem) =>
      cartItem.name === item.name && cartItem.selectedSize === selectedSize
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ ...item, selectedSize, quantity });
  }

  saveCart();
  displayCart();
}

// Function to display cart
function displayCart() {
  const cartContainer = document.getElementById("cart");
  const heading = document.getElementById("cart");
  cartContainer.innerHTML = "<h2>Your Products</h2>";

  const headerRow = document.createElement("tr");

  if (cart.length === 0) {
    cartContainer.innerHTML += "<p>Your Products is empty.</p>";
    return;
  }

  cart.forEach((cartItem, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `
      <p>${cartItem.name} </p><p>${cartItem.selectedSize}</p>
      <input type="number" id="quantity-${index}" value="${
      cartItem.quantity
    }" min="1" />
      <p>$${cartItem.price.toFixed(2)}</p>
      <button class="remove-item" data-index="${index}">Remove</button>
    `;

    // Bind event listeners
    cartItemDiv
      .querySelector(".remove-item")
      .addEventListener("click", () => removeFromCart(index));
    cartItemDiv
      .querySelector(`#quantity-${index}`)
      .addEventListener("input", () => updateQuantity(index));

    cartContainer.appendChild(cartItemDiv);
  });

  const totalDiv = document.createElement("div");
  totalDiv.classList.add("cart-total");
  totalDiv.innerHTML = `<strong>Total: $${cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)}</strong>`;
  cartContainer.appendChild(totalDiv);
}

// Function to remove item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  displayCart();
}

// Function to update quantity in the cart
function updateQuantity(index) {
  const newQuantity = parseInt(
    document.getElementById(`quantity-${index}`).value,
    10
  );
  if (newQuantity > 0) {
    cart[index].quantity = newQuantity;
    saveCart();
    displayCart();
  }
}

// Function to generate HTML for each menu item
function generateMenu(menuItems) {
  const menuContainer = document.getElementById("menu-items");
  menuContainer.innerHTML = "";

  menuItems.forEach((item) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");
    const defaultSize = item.sizes[0];

    menuItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="size-buttons">
        <h3 class="name">${item.name} <p class="price"><b>$${item.price.toFixed(
      2
    )}</b></p></h3>
        <div class="button-controls">
          ${item.sizes
            .map(
              (size) =>
                `<button class="size-btn ${
                  size === defaultSize ? "selected" : ""
                }">${size}</button>`
            )
            .join("")}
        </div>
        <button class="add-to-cart">Add to cart</button>
      </div>
    `;

    menuContainer.appendChild(menuItemDiv);

    menuItemDiv
      .querySelector(".add-to-cart")
      .addEventListener("click", function () {
        const selectedSize =
          menuItemDiv.querySelector(".size-buttons .selected")?.textContent ||
          defaultSize;
        addToCart(item, selectedSize);
      });

    menuItemDiv.querySelectorAll(".size-btn").forEach((button) => {
      button.addEventListener("click", function () {
        menuItemDiv
          .querySelectorAll(".size-btn")
          .forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
      });
    });
  });
}
function printProducts() {
  if (!cart.length) {
    return alert("Your Products is empty!");
  }

  const printWindow = window.open("", "", "width=800,height=600");

  const cartHtml = cart
    .map(
      (cartItem) =>
        `<tr>
          <td>${cartItem.name}</td>
          <td>${cartItem.selectedSize}</td>
          <td>${cartItem.quantity}</td>
          <td>$${cartItem.price.toFixed(2)}</td>
          <td>$${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
        </tr>`
    )
    .join("");

  const total = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  printWindow.document.write(
    `<html>
      <head>
        <title>H'9 Coffee Shop</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          table, th, td {
            border: 1px solid #ccc;
          }
          th, td {
            padding: 8px;
            text-align: center;
          }
          th {
            font-weight: bold;
          }
          .total {
            font-weight: bold;
            text-align: right;
            padding-right: 20px;
            margin-top: 10px;
            border-top: 2px solid #000; /* Adds a line above the total */
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <h2>Your Order Products</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${cartHtml}
          </tbody>
        </table>
        <p class="total">Total: $${total}</p>
      </body>
    </html>`
  );

  printWindow.document.close();
  printWindow.onload = () => printWindow.print();
}

// // login
// document.addEventListener("DOMContentLoaded", function () {
//   // Wait for the DOM to load
//   let settingsButton = document.querySelector(".settings");

//   if (settingsButton) {
//     settingsButton.addEventListener("click", function (event) {
//       event.preventDefault(); // Stop the default behavior of the link

//       // Show confirmation alert
//       let choice = confirm("Do you want to Log In Again?");

//       if (choice) {
//         window.location.href = "login.html"; // Update with actual login page
//       } else {
//         window.location.href = "mian.html"; // Update with actual signout page
//       }
//     });
//   } else {
//     console.error("Settings button not found!");
//   }
// });

const products = [
  {
    id: "1",
    name: "Silver Ring",
    price: 999,
    image: "images/ring1.jpg"
  },
  {
    id: "2",
    name: "Earrings",
    price: 1499,
    image: "images/earring1.jpg"
  },
  {
    id: "3",
    name: "Bracelet",
    price: 1999,
    image: "images/bracelet1.jpg"
  },
   {
    id: "4",
    name: "Silver Ring",
    price: 1299,
    image: "images/ring3.jpg"
  },
  {
    id: "5",
    name: "Earrings",
    price: 1099,
    image: "images/earring2.jpg"
  },
  {
    id: "6",
    name: "Bracelet",
    price: 1800,
    image: "images/bracelet2.jpg"
  },
   {
    id: "7",
    name: "Set",
    price: 1099,
    image: "images/set2.jpg"
  },
  {
    id: "8",
    name: "Pendent",
    price: 1900,
    image: "images/pendent2.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-container");

let total = 0;

if (cart.length === 0) {
  container.innerHTML = "<h3 class='empty'>Your cart is empty</h3>";
} else {
  cart.forEach(id => {
    const product = products.find(p => p.id === id);

    if (product) {
      total += product.price;   

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${product.image}">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
        <button class="wishlist-remv" onclick="removeFromCart('${product.id}')">
          Remove
        </button>
      `;

      container.appendChild(card);
    }
  });

   const bottomBar = document.createElement("div");
  bottomBar.classList.add("cart-bottom");

  bottomBar.innerHTML = `
    <h3>Total: ₹${total}</h3>
    <button class="buy-btn">Buy Now</button>
  `;

  container.appendChild(bottomBar);

 
  bottomBar.querySelector(".buy-btn").onclick = () => {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    location.reload();
  };
}
 
function removeFromCart(id) {
  cart = cart.filter(item => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
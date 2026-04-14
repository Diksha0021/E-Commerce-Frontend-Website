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

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlist-container");

if (wishlist.length === 0) {
  container.innerHTML = "<h3 class='empty' >Your wishlist is empty</h3>";
} else {
  wishlist.forEach(id => {
    const product = products.find(p => p.id === id);

    if (product) {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${product.image}">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
       
         <button class="cart-btn" onclick="addToCart('${product.id}')">
    Add to Cart
  </button>

        <button class="wishlist-remv" onclick="removeFromWishlist('${product.id}')">Remove</button>

      `;

      container.appendChild(card);
    }
  });
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(item => item !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  location.reload();
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");
  } else {
    alert("Item already in cart");
  }
}
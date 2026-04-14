const slider = document.querySelector(".slide-img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let scrollAmount =0;

function getTypeWidth(){
    const card = document.querySelector(".type");
    const gap = 20;
    return card.offsetWidth + gap;
}

function getMaxScroll(){
    return slider.scrollWidth - slider.parentElement.clientWidth;
}

next.addEventListener("click",() => {
   const MaxScroll = getMaxScroll();
   const moveamount = getTypeWidth();
   
    if(scrollAmount<MaxScroll){
        scrollAmount+= moveamount;
    }
    if(scrollAmount>MaxScroll){
        scrollAmount = moveamount;
    }
    slider.style.transform =
    `translateX(-${scrollAmount}px)`;
})

prev.addEventListener("click",() => {
     const moveamount = getTypeWidth();
    if(scrollAmount>0){
        scrollAmount-=  moveamount;
    }
    if(scrollAmount<0){
        scrollAmount = 0;
    }
    slider.style.transform =
   `translateX(-${scrollAmount}px)` ;
})


const searchBar = document.querySelector("#searchBox");

const placeholders = [
    "Search Rings..." ,
    "Search Necklaces...",
    "Search Earrings...",
    "Search Bracelets...",
];

let index=0;

setInterval(() => {
    index = (index + 1)%placeholders.length;
    searchBar.placeholder = placeholders[index];

},2000);


/*cards*/

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

const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" alt="">
    <h4>${product.name}</h4>
    <p>₹${product.price}</p>

    <button class="wishlist-btn" data-id="${product.id}">
      <i class="fa-regular fa-heart"></i>
    </button>

    <button class="cart-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
  `;

  container.appendChild(card);
});

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


function toggleWishlist(btn) {
  const id = btn.getAttribute("data-id");

  if (wishlist.includes(id)) {
    // remove
    wishlist = wishlist.filter(item => item !== id);
    btn.classList.remove("active");
  } else {
    // add
    wishlist.push(id);
    btn.classList.add("active");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  
}


document.querySelectorAll(".wishlist-btn").forEach(btn => {
  btn.addEventListener("click", () => toggleWishlist(btn));
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    const id = btn.getAttribute("data-id");

    if (wishlist.includes(id)) {
      btn.classList.add("active");
    }
  });

  
});
    
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");
  } else {
    alert("Item already in cart");
  }
}

// Get elements
const accountBtn = document.getElementById("account-btn");
const accountText = document.getElementById("account-text");

// Get user from localStorage
let user = JSON.parse(localStorage.getItem("user"));

// Change button text
if (user) {
  accountText.innerText = "MY ACCOUNT";
} else {
  accountText.innerText = "LOGIN";
}

// Click behavior
accountBtn.onclick = () => {
  if (user) {
    window.location.href = "profile.html"; // logged in
  } else {
    window.location.href = "login.html"; // not logged in
  }
};

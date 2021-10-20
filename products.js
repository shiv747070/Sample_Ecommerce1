function toggle() {
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
  popup.classList.toggle('popup');


};

function toggle1() {
  var popup = document.getElementById('popup1');
  popup.classList.toggle('active');
  popup.classList.toggle('popup');


};

function toggle2() {
  var popup = document.getElementById('popup2');
  popup.classList.toggle('active');
  popup.classList.toggle('popup');


};


const products = [{
    name: "अनंत मूल की जड़(Anant mool)",
    tag: "anant",
    price: 249,
    inCart: 0
  },
  {
    name: "बेल मूल की जड़(Bel mool ki jadi)",
    tag: "belmool",
    price: 249,
    inCart: 0
  },
  {
    name: "बुध यंत्र(buddh yantra)",
    tag: "buddhayantra",
    price: 249,
    inCart: 0
  },
  {
    name: "चंद्र यंत्र ़(chandra yantra)",
    tag: "chandrayantra",
    price: 249,
    inCart: 0
  },
  {
    name: "दस मुखी रुद्राक्ष ़(das mukhi rudraksha)",
    tag: "dasmukhi",
    price: 249,
    inCart: 0
  },
  {
    name: "धतूरे की जड़(Dhature ki jad)",
    tag: "dhaturajad",
    price: 249,
    inCart: 0
  },
  {
    name: "दो मुखी रुद्राक्ष़(do mukhi rudraksha)",
    tag: "domukhi",
    price: 249,
    inCart: 0
  },
  {
    name: "एक मुखी रुद्राक्ष़(ek mukhi rudraksha)",
    tag: "ekmukhi",
    price: 249,
    inCart: 0
  },
  {
    name: ">गुरु यंत्र (guru yantra)",
    tag: "guruyantra",
    price: 249,
    inCart: 0
  },
  {
    name: "जरकन ़(jarkan)",
    tag: "jarkan",
    price: 249,
    inCart: 0
  },
  {
    name: "मंगल यंत्र ़(mangal yantra)",
    tag: "mangalyantra",
    price: 249,
    inCart: 0
  },
  {
    name: "माणिक्य़(Ruby)",
    tag: "manikya",
    price: 249,
    inCart: 0
  }

];

//cart number logic//
let cart = document.querySelectorAll(".bag-btn");

let cartArray = Array.from(cart);

for (let i = 0; i < cartArray.length; i++) {
  cartArray[i].addEventListener("click", () => {

    cartNumbers(products[i]);
    totalCost(products[i]);
  });
};


function onLoad() {
  let productsNumber = localStorage.getItem("cartNumbers");
  document.querySelector(".cart-items").textContent = productsNumber;
};

function cartNumbers(product) {

  let productsNumber = localStorage.getItem("cartNumbers");
  productsNumber = parseInt(productsNumber);
  if (productsNumber) {
    localStorage.setItem("cartNumbers", productsNumber + 1);
    document.querySelector(".cart-items").textContent = productsNumber + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-items").textContent = 1;
  }
  setItems(product);
};

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }

    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }

  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
  let cartCost = localStorage.getItem("totalCost");

  if(cartCost !=null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost+product.price);
  }else{
    localStorage.setItem("totalCost",product.price);
  }

}

// function displayCart(){
//   let productsToDisplay = localStorage.getItem("productsInCart");
//   productsToDisplay = JSON.parse(productsToDisplay);
//   let productsContainer = document.querySelector(".cart-overlay");
//   let cartCost = localStorage.getItem("totalCost");
//   console.log(productsToDisplay);
//
//   if(productsToDisplay && productsContainer){
//     productsContainer.innerHTML ="";
//     Object.values(productsToDisplay).forEach(item => {
//       productsContainer.innerHTML += `
//       <div class="cart-overlay">
//         <div class="cart">
//           <span class="close-cart">
//             <i class="fas fa-window-close"></i>
//           </span>
//           <h2>your cart</h2>
//           <div class="cart-content">
//
//             <div class="cart-item">
//               <img src="./images/${item.tag}.jpg" alt="product1">
//
//               <div class="">
//                 <h4>${item.name}</h4>
//                 <h5> <span><i class="fas fa-rupee-sign"></i></span> ${item.price}</h5>
//                 <span class="remove-item">remove</span>
//               </div>
//
//               <div class="">
//                 <i class="fas fa-chevron-up"></i>
//                 <p class="item-amount">${item.inCart}</p>
//                 <i class="fas fa-chevron-down"></i>
//               </div>
//             </div>
//
//
//           </div>
//
//           <div class="cart-footer">
//             <h3>your total : <span><i class="fas fa-rupee-sign"></i></span> <span class="cart-total">${cartCost}</span> </h3>
//             <button class="clear-cart banner-btn">clear cart</button>
//           </div>
//         </div>
//
//       </div>
//       `
//     })
//   }
// };

onLoad();
// displayCart();
//end of cart number logic//

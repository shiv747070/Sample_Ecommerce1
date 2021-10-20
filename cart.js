function displayCart(){
  let productsToDisplay = localStorage.getItem("productsInCart");
  productsToDisplay = JSON.parse(productsToDisplay);

  let productsContainer = document.querySelector(".cart-overlay");
  let cartContent = document.querySelector(".cart-content");
  let cartFooter = document.querySelector(".cart-footer");
  let cartCost = localStorage.getItem("totalCost");
  console.log(productsToDisplay);

  if(productsToDisplay ){
    // productsContainer.innerHTML ="";
    Object.values(productsToDisplay).forEach(item => {

      const div = document.createElement('div');
      div.classList.add('cart-item');

      div.innerHTML = `<img src="./images/${item.tag}.jpg" alt="product1">

               <div class="">
                 <h4>${item.name}</h4>
                 <h5> <span><i class="fas fa-rupee-sign"></i></span> ${item.price}</h5>
                 <!-- <span class="remove-item">remove</span> -->
               </div>

               <div class="">
                 <i class="fas fa-chevron-up increase"></i>
                 <p class="item-amount">${item.inCart}</p>
                 <i class="fas fa-chevron-down decrease"></i>
               </div>`;
               cartContent.appendChild(div);


    })
    let cartCost = localStorage.getItem("totalCost");
    cartFooter.innerHTML =
    `
      <h3>your total : &#8377; <span class="cart-total">${cartCost}</span> </h3>
      <button class="clear-cart banner-btn">Checkout</button>
    `;
  }
};


displayCart();


// converting products in local storage from JS object format into an Array//
const productsToDisplayArray =[];
let productsToDisplay = localStorage.getItem("productsInCart");
productsToDisplay = JSON.parse(productsToDisplay);
for (let i in productsToDisplay) {
  productsToDisplayArray.push(productsToDisplay[i]);
};
console.log(productsToDisplayArray);
// conversion complete//

let increase = document.querySelectorAll(".increase");
let increaseArray = Array.from(increase);
console.log(increaseArray);
for (let i = 0; i < increaseArray.length; i++) {
  increaseArray[i].addEventListener("click",() => {

    let productsNumber = localStorage.getItem("cartNumbers");
    productsNumber = parseInt(productsNumber);
    localStorage.setItem("cartNumbers", productsNumber + 1);

    chevronUp(productsToDisplayArray[i]);
    document.location.reload();
  });
};




function chevronUp(clickedProduct){
  console.log(clickedProduct);
  let updatedProductsToDisplay = localStorage.getItem("productsInCart");
  updatedProductsToDisplay = JSON.parse(updatedProductsToDisplay);
  //clickedProduct.inCart += 1;
  updatedProductsToDisplay[clickedProduct.tag].inCart += 1;
  localStorage.setItem("productsInCart",JSON.stringify(updatedProductsToDisplay));

  //console.log(updated_inCart_value);
  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);
  localStorage.setItem("totalCost",cartCost + clickedProduct.price);


};

let decrease = document.querySelectorAll(".decrease");
let decreaseArray = Array.from(decrease);
console.log(decreaseArray);
for (let i = 0; i < decreaseArray.length; i++) {
  decreaseArray[i].addEventListener("click",() => {



    chevronDown(productsToDisplayArray[i]);
    document.location.reload();
  });
};

function chevronDown(clickedProduct){
  console.log(clickedProduct);
  let updatedProductsToDisplay = localStorage.getItem("productsInCart");
  updatedProductsToDisplay = JSON.parse(updatedProductsToDisplay);
  //clickedProduct.inCart += 1;
  let clickedInCart = updatedProductsToDisplay[clickedProduct.tag].inCart -=1 ;
  console.log(clickedInCart);
  if (clickedInCart < 1) {
    let productsNumber = localStorage.getItem("cartNumbers");
    productsNumber = parseInt(productsNumber);
    localStorage.setItem("cartNumbers", productsNumber - 1);

    delete updatedProductsToDisplay[clickedProduct.tag];
    localStorage.setItem("productsInCart",JSON.stringify(updatedProductsToDisplay));

    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost - clickedProduct.price);

  } else {
    let productsNumber = localStorage.getItem("cartNumbers");
    productsNumber = parseInt(productsNumber);
    localStorage.setItem("cartNumbers", productsNumber - 1);

    updatedProductsToDisplay[clickedProduct.tag].inCart -=1;
    localStorage.setItem("productsInCart",JSON.stringify(updatedProductsToDisplay));

    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost - clickedProduct.price);
  }



  //console.log(updated_inCart_value);



};

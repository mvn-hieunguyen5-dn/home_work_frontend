var $numberofitem = document.getElementById("cartnumber");
var $carttable = document.getElementById("bodycart");
var $total = document.getElementById("total");
var cartproduct = JSON.parse(localStorage.getItem("Product"));


var table = "";
function update() {
  table = "";
  for (var i = 0; i < cartproduct.length; i++) {
    table +=
      "<tr> <td>" +
      cartproduct[i].id +
      "</td>  <td><img class='cartimg' src=" +
      cartproduct[i].img +
      " /></td> <td>" +
      cartproduct[i].item +
      "</td>  <td>    <div class='quantity'>      <button class='cart-button' onclick='reducequantity(" +
      cartproduct[i].id +
      ")'>        <svg class='carticon' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor'          fill='none' stroke-linecap='round' stroke-linejoin='round'>          <path stroke='none' d='M0 0h24v24H0z' />          <circle cx='12' cy='12' r='9' />          <line x1='9' y1='12' x2='15' y2='12' />        </svg>     </button>      <p class='flex-grow'>" +
      cartproduct[i].quantity +
      "</p>     <button class='cart-button' onclick='addquantity(" +
      cartproduct[i].id +
      ")'>       <svg class='carticon' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor'        fill='none' stroke-linecap='round' stroke-linejoin='round'>          <path stroke='none' d='M0 0h24v24H0z' />          <circle cx='12' cy='12' r='9' />         <line x1='9' y1='12' x2='15' y2='12' />          <line x1='12' y1='9' x2='12' y2='15' />        </svg> </button>   </div>  </td>  <td>$" +
      cartproduct[i].price +
      "</td> <td><button class='add-button' onclick='remove(" +
      cartproduct[i].id +
      ")'>Remove</button></td></tr>";
  }
  $carttable.innerHTML = table;
  $numberofitem.innerText = cartproduct.length;
  getTotal();
}
update();

function reducequantity(id) {
  if (cartproduct[isduplication(cartproduct, id)].quantity > 1) {
    cartproduct[isduplication(cartproduct, id)].quantity--;
    localStorage.setItem("Product", JSON.stringify(cartproduct));
    update();
  } else {
    remove(id);
  }
}

function addquantity(id) {
  cartproduct[isduplication(cartproduct, id)].quantity++;
  localStorage.setItem("Product", JSON.stringify(cartproduct));
  update();
}
function remove(id) {
  if (confirm("Are you sure to delete this product?")) {
    cartproduct.splice(isduplication(cartproduct, id), 1);
    localStorage.setItem("Product", JSON.stringify(cartproduct));
    update();
  }
}

function isduplication(cart, id) {
  const even = (itemincart) => itemincart.id == id;
  return cart.findIndex(even);
}

function getTotal() {
  var total = 0;
  for (var i = 0; i < cartproduct.length; i++) {
    total += cartproduct[i].quantity * cartproduct[i].price;
  }
  $total.innerText ='$'+ total;
}
function removeAll(){
  if (confirm("Are you sure?")) {
    cartproduct =[]
    localStorage.setItem("Product", JSON.stringify(cartproduct));
    update();
  }
}
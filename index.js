const items = [
  {
    id: 1,
    item: "La Bohème Rose Gold",
    img: "https://themes.the4.co/kalles-html/assets/images/megamenu/pr-11.jpg",
    price: 45,
  },
  {
    id: 2,
    item: "Cream women pants",
    img: "https://themes.the4.co/kalles-html/assets/images/products/pr-18.jpg",
    price: 35,
  },
  {
    id: 3,
    item: "Woman Black Pants",
    img: "https://themes.the4.co/kalles-html/assets/images/products/pr-11.jpg",
    price: 35,
  },
  {
    id: 4,
    item: "Sweatshirt in Geometric Print",
    img: "https://themes.the4.co/kalles-html/assets/images/products/pr-33.jpg",
    price: 36,
  },
  {
    id: 5,
    item: "Analogue Resin Strap",
    img: "https://themes.the4.co/kalles-html/assets/images/megamenu/pr-01.jpg",
    price: 36,
  },
  {
    id: 6,
    item: "Cream women pants",
    img: "https://themes.the4.co/kalles-html/assets/images/home-classic/pr-11.jpg",
    price: 30,
  },
  {
    id: 7,
    item: "Short Sleeved Hoodie",
    img: "https://themes.the4.co/kalles-html/assets/images/home-fashion-simple/pr-01.jpg",
    price: 35,
  },
  {
    id: 8,
    item: "Sport Sneaker",
    img: "https://themes.the4.co/kalles-html/assets/images/home-fashion-9/pr-s-47.jpg",
    price: 36,
  },
];

var $itemsbar = document.getElementById("insert-items");
var $numberofitem = document.getElementById("cartnumber");
var $showjson = document.getElementById("data");

var cart =localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : [];
$numberofitem.innerText = cart.length;
// console.log($itemsbar);
var html = "";
for (var i = 0; i < items.length; i++) {
  html +=
    " <div class='item-container' id='insert-items'><tr class='item'> <td><div class='img-container'> <img class='img' src='" +
    items[i].img +
    "' /> </div></td> <td> <h2>" +
    items[i].item +
    "</h2></td><td> <p class='price'>$ " +
    items[i].price +
    " </p></td> <td>      <button class='add-button' onclick='handleclick(" +
    items[i].id +
    ")' >Add to cart</button> </td></tr></div>";
}

console.log(html);
$itemsbar.innerHTML = html;

console.log($showjson);

function handleclick(id) {
  var result = items.find((item) => item.id == id);
  if (isduplication(cart, result) < 0) {
    // result.push({ amount: 1 });
    result = { ...result, ...{ quantity: 1 } };
    cart.push(result);
  } else {
    cart[isduplication(cart, result)].quantity++;
  }
  $showjson.innerHTML = JSON.stringify(cart);
  localStorage.setItem("Product", JSON.stringify(cart));
  $numberofitem.innerText = cart.length;
}

//Kiểm tra xem mặt hàng này đã nằm trong giở hàng hay chưa =id
function isduplication(cart, item) {
  const even = (itemincart) => itemincart.id == item.id;
  return cart.findIndex(even);
}

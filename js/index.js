let left = document.getElementById("left-bar");
// import leftbar from '../leftbar.html' assert {type: ''};
const leftbar =
  '<div class="container"><div class="user"> <div class="avatar"></div>  <div class="userdata"> <span id="username">Cobra Com</span><p>Supreme command</p> </div></div><ul class="direction">  <li><div class="vertical"></div><a href="/index.html"> <i class="fa-solid fa-house-chimney"></i> Home page</a></li>  <li><div class="vertical"></div><a href="/tracking.html"><i class="fa-solid fa-map"></i> Tracking</a></li>  <li><div class="vertical"></div><a href="/newShipment.html"><i class="fa-solid fa-ship"></i> New shipment</a></li></ul></div>';
left.innerHTML = leftbar;

function redirectDT(id) {
  location.href = "detailsShipment.html?id=" + id;
}

let putinLT = ()=>{
  localStorage.setItem('items', JSON.stringify(data));
}
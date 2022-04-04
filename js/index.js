let left = document.getElementById("left-bar");
// import leftbar from '../leftbar.html' assert {type: ''};
const leftbar =
  '<div class="container"><div class="user"> <img class="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU"/>  <div class="userdata"> <span class="panel-text" id="username">Cobra Com</span><p class="panel-text">Supreme command</p> </div></div><ul class="direction">  <li><div class="vertical"></div><a href="/index.html"> <i class="fa-solid fa-house-chimney"></i> <span class="panel-text"> Home page </span> </a></li>  <li><div class="vertical"></div><a href="/tracking.html"><i class="fa-solid fa-map"></i> <span class="panel-text"> Tracking </span></a></li>  <li><div class="vertical"></div><a href="/newShipment.html"><i class="fa-solid fa-ship"></i> <span class="panel-text"> New shipment </span></a></li></ul></div>';
left.innerHTML = leftbar;

function redirectDT(id) {
  location.href = "detailsShipment.html?id=" + id;
}

let putinLT = ()=>{
  localStorage.setItem('items', JSON.stringify(data));
}
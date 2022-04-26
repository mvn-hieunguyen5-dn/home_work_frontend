import { find, addData } from "./logic.js";
import Shipdata from "../data/shipdata.json" assert { type: "json" };
let sid = document.getElementById("sid");

const params = new URLSearchParams(document.location.search);
let id = "";
sid.innerText = id;
let target = {};

let $Ship = document.getElementById("shipID");
let $Date = document.getElementById("startDate");
let $autoID = document.getElementById("autoID");
let p1 = "";
let p3 = "";
let p2 = "";
let updateID = () => {
  id = p1 + "-" + p2 + "-" + p3;
  $autoID.innerText = id;
};
{
  $Ship.innerHTML += `<option value=""></option>`;
  for (let i = 0; i < Shipdata.length; i++) {
    $Ship.innerHTML += `<option value="${Shipdata[i].id}">${Shipdata[i].id}</option>`;
  }
}
$Ship.addEventListener("change", () => {
  fillShipData($Ship.value);
  p1 = $Ship.value;
  updateID();
});
$Date.addEventListener("change", () => {
  let date = new Date($Date.value);
  p2 = "SPR";
  if (date.getMonth > 8) p2 = "WIN";
  if (date.getMonth > 5) p2 = "AUT";
  if (date.getMonth > 2) p2 = "SUM";
  p3 = date.getFullYear();
  updateID();
});

function fillShipData(shipId) {
  let Starget = find(shipId, Shipdata);
  document.getElementById("shipName").innerText = Shipdata[Starget].name;
  document.getElementById("shipImg").src = Shipdata[Starget].img;
  document.getElementById("lcode").innerText = Shipdata[Starget].license;
  document.getElementById("exdate").innerText = Shipdata[Starget].expired;
  document.getElementById("shipType").innerText = Shipdata[Starget].type;
}

//--------------------------------------------------------------------------------
const form = document.getElementById("editform");
form.addEventListener("submit", updateData);

function updateData(event) {
  event.preventDefault();
  if (id != "" && !!find(id)) {
    target.company = document.getElementById("comName").value;
    target.from = document.getElementById("from").value;
    target.to = document.getElementById("to").value;
    target.status = document.getElementById("status").value;
    target.startdate = $Date.value;
    target.enddate = document.getElementById("endDate").value;
    target.shipId = $Ship.value;
    target.id = id;
    addData(target);
    alert("Add successfull");
    location.href = "./detailsShipment.html?id=" + id;
  } else {
    alert("Add fail");
  }
}

window._turnDetail = () => {
  location.href = "./detailsShipment.html?id=" + id;
};

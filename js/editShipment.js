import { updateByID, getDataByID, find } from "./logic.js";
let sid = document.getElementById("sid");

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
sid.innerText = id;
// --------------- ID
import data from "../data/shipment.json" assert { type: "json" };
import Shipdata from "../data/shipdata.json" assert { type: "json" };
let $Ship = document.getElementById("shipID");

{
  $Ship.innerHTML += `<option value=""></option>`;
  for (let i = 0; i < Shipdata.length; i++) {
    $Ship.innerHTML += `<option value="${Shipdata[i].id}">${Shipdata[i].id}</option>`;
  }
}
$Ship.addEventListener("change", () => {
  fillShipData($Ship.value);
});
let target = getDataByID(id);
{
  document.getElementById("shipID").value = target.shipId;
  document.getElementById("comName").value = target.company;
  document.getElementById("from").value = target.from;
  document.getElementById("to").value = target.to;
  document.getElementById("status").value = target.status;
  document.getElementById("startDate").value = target.startdate;
  document.getElementById("endDate").value = target.enddate;
  fillShipData(target.shipId);
}

function fillShipData(shipId) {
  let Starget = find(shipId, Shipdata);
  document.getElementById("shipName").innerText = Shipdata[Starget].name;
  document.getElementById("shipImg").src = Shipdata[Starget].img;
  document.getElementById("lcode").innerText = Shipdata[Starget].license;
  document.getElementById("exdate").innerText = Shipdata[Starget].expired;
  document.getElementById("shipType").innerText = Shipdata[Starget].type;
}

window._turnDetail = () => {
  location.href = "./detailsShipment.html?id=" + id;
};
//--------------------------------------------------------------------------------
const form = document.getElementById("editform");
form.addEventListener("submit", updateData);

function updateData(event) {
  
  event.preventDefault();
  target.shipId = $Ship.value;
  target.company = document.getElementById("comName").value;
  target.from = document.getElementById("from").value;
  target.to = document.getElementById("to").value;
  target.status = document.getElementById("status").value;
  target.startdate = document.getElementById("startDate").value;
  target.enddate = document.getElementById("endDate").value;
  // console.log(target);
  updateByID(target, id);
  alert("Edit successfull");
  location.href = "./detailsShipment.html?id=" + id;
}

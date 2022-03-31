import {
  relativeFind,
  getData,
  setData,
  deleteByID,
  getDataByID,
  find,
} from "./logic.js";
let sid = document.getElementById("sid");

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
sid.innerText = id;
// --------------- ID
import Shipdata from "../data/shipdata.json" assert { type: "json" };
let target = getDataByID(id);
{
  document.getElementById("shipID").innerText = target.shipId;
  document.getElementById("comName").innerText = target.company;
  document.getElementById("from").innerText = target.from;
  document.getElementById("to").innerText = target.to;
  document.getElementById("status").innerText = target.status;
  document.getElementById("startDate").innerText = new Date(
    target.startdate
  ).toLocaleDateString();
  document.getElementById("endDate").innerText = new Date(
    target.enddate
  ).toLocaleDateString();
  switch (target.status) {
    case "On-going":
      document.getElementById("status").innerHTML =
        ' <p class="tag status0">' + target.status + "</p>";
      break;
    case "Pending":
      document.getElementById("status").innerHTML =
        ' <td> <p class="tag status1">' + target.status + "</p></td>";
      break;
    default:
      document.getElementById("status").innerHTML =
        ' <td> <p class="tag status2">' + target.status + "</p></td>";
  }
}

{
  target = find(target.shipId, Shipdata);
  console.log(target);

  document.getElementById("shipName").innerText = Shipdata[target].name;
  document.getElementById("shipImg").src = Shipdata[target].img;
  document.getElementById("lcode").innerText = Shipdata[target].license;
  document.getElementById("exdate").innerText = Shipdata[target].expired;
  document.getElementById("shipType").innerText = Shipdata[target].type;
}

window._deleteInTable = () => {
  console.log(getDataByID(id));
  if (confirm("Delete this shopment?")) {
    deleteByID(id);
    location.href = "./tracking.html";
  }
};

window._turnEdit = () => {
  location.href = "./editShipment.html?id=" + id;
};

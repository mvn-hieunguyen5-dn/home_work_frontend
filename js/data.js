import data from "../data/shipment.json" assert { type: "json" };
let putinLT = () => {
  localStorage.setItem("items", JSON.stringify(data));
  InLocal.innerText = "Ready to go";
  InLocal.disabled = true;
};
let clearLT = () => {
  if (confirm("are you sure ?")) localStorage.clear();
};
const InLocal = document.getElementById("InLocal");
InLocal.addEventListener("click", putinLT);
const ClLocal = document.getElementById("ClLocal");
ClLocal.addEventListener("click", clearLT);

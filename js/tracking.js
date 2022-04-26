import {
  relativeFind,
  find,
  getData,
  setData,
  deleteByID,
  getDataByID,
} from "./logic.js";
let $body = document.getElementById("body");

let data = getData();
console.table(data);

function update() {
  console.count("update");
  let HTML = "";
  for (let i = 0; i < data.length; i++) {
    HTML += `
      <tr >
      
      <td  class="mobile-flex" data-header="ID:">${data[i].id} </td>
      <td class="mobile-flex" data-header="Ship ID">
      ${data[i].shipId}
      </td  >
      <td class="mobile-flex" data-header="Company">
      ${data[i].company}
      </td>
      <td class="mobile-flex" data-header="From">
      ${data[i].from} 
      </td>
      <td class="mobile-flex" data-header="To">
     ${data[i].to}
      </td>  <td class="mobile-flex" data-header="Status"> `;
    switch (data[i].status) {
      case "On-going":
        HTML += '<p class="tag status0">' + data[i].status + "</p></td>";
        break;
      case "Pending":
        HTML += '<p class="tag status1">' + data[i].status + "</p></td>";
        break;
      default:
        HTML += '<p class="tag status2">' + data[i].status + "</p></td>";
    }
    HTML += '<td class="action mobile-flex">  ';
    HTML += `<button onclick="window._deleteInTable('${data[i].id}')" class="deleteB table-action"><i class="fa-solid fa-trash-can"></i> Delete </button> <a class="goDetail table-action" href="detailsShipment.html?id=${data[i].id}"> <i  class="fa-solid fa-folder-open"></i>Detail</a><a class="goDetail table-action" href="editShipment.html?id=${data[i].id}"><i class="fa-solid fa-pen-to-square "></i>Edit</a> </td> </tr>`;
  }
  $body.innerHTML = HTML;
}
update();

document.querySelector("#searchbyID").addEventListener("input", function (e) {
  let value = document.getElementById("searchbyID").value;
  data = relativeFind(value);
  update();
});

window._deleteInTable = (id) => {
  console.log(getDataByID(id));
  if (confirm("Delete this shopment?")) {
    deleteByID(id);
    data = getData();
    update();
  }
};

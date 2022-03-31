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
console.log(data);

function update() {
  console.count("update");
  let HTML = "";
  for (let i = 0; i < data.length; i++) {
    HTML += `
      <tr  >
      
      <td>${data[i].id} </td><td>
      ${data[i].shipId}
      </td><td>
      ${data[i].company}
      </td><td>
      ${data[i].from} 
      </td><td>
     ${data[i].to}
      </td>`;
    switch (data[i].status) {
      case "On-going":
        HTML += ' <td> <p class="tag status0">' + data[i].status + "</p></td>";
        break;
      case "Pending":
        HTML += ' <td> <p class="tag status1">' + data[i].status + "</p></td>";
        break;
      default:
        HTML += ' <td> <p class="tag status2">' + data[i].status + "</p></td>";
    }
    HTML += '<td class="action">  ';
    HTML += `<button onclick="window._deleteInTable('${data[i].id}')" class="deleteB"><i class="fa-solid fa-trash-can"></i> Delete </button> <a class="goDetail" href="detailsShipment.html?id=${data[i].id}"> <i  class="fa-solid fa-folder-open"></i>Detail</a><a class="goDetail" href="editShipment.html?id=${data[i].id}"><i class="fa-solid fa-pen-to-square"></i>Edit</a> </td> </tr>`;
  }
  $body.innerHTML = HTML;
}
update();

document.querySelector("#searchbyID").addEventListener("input", function (e) {
  let value = document.getElementById("searchbyID").value;
  data = relativeFind(value)
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

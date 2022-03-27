var user = document.getElementById("users");
var page = document.getElementById("page");
var num = document.getElementById("num");
// Execute a function when the user releases a key on the keyboard
async function setData(page = 1) {
  let HTML = "";
  let res = await callApi(page);
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    HTML +=
      "<tr> <td>" +
      res[i].id +
      "</td> <td>" +
      res[i].first_name +
      "</td> <td>" +
      res[i].last_name +
      ' </td><td><img src="' +
      res[i].avatar +
      '" class="avatar" /> </td> <td>' +
      res[i].email +
      "</td> </tr>";
  }
  user.innerHTML = HTML;
}

function callApi(page) {
  var res = fetch("https://reqres.in/api/users?page" + page)
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    });
  return res;
}
page.addEventListener("change", function () {
  console.log(this.value);
  setData(this.value);
  // Error lost list ???
});
setData();

let $username = document.getElementById("username");
let $password = document.getElementById("password")
let inputlogin = "Wellcome back";

let i = 0;
let inter = setInterval(() => {
  $username.value += inputlogin[i];
  $password.value += inputlogin[i];
  console.log(i);
  if (i == inputlogin.length - 1) {
    clearInterval(inter);
    setTimeout(() => {
      location.href="./";
    }, 1000);
  }
  i++;
}, 100);

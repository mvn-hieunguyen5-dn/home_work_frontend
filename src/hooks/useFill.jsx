import { useState } from "react";
export default function useFill() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const setValue = {
    userName: function (val = "") {
      setData({ ...data, username: val });
    },
    passsword: function (val = "") {
      setData({ ...data, password: val });
    },
    clear: function () {
      setData({
        ...data,
        username: "",
        password: "",
      });
    },
  };
  return { data, setData, setValue };
}

import { useState } from "react";
export default function useFill() {
  const [data, setData] = useState({
    username: "",
    passsword: "",
    gender: 0,
    country: "VN",
    description: "",
    checked: 0,
  });
  const setValue = {
    userName: function (val = "") {
      setData({ ...data, username: val });
    },
    passsword: function (val = "") {
      setData({ ...data, passsword: val });
    },
    gender: function (val = 0) {
      setData({ ...data, gender: parseInt(val) });
    },
    country: function (val = "") {
      setData({ ...data, country: val });
    },
    description: function (val = "") {
      setData({ ...data, description: val });
    },
    checked: function (val = "") {
      setData({ ...data, checked: val });
    },
  };
  return { data, setData, setValue };
}

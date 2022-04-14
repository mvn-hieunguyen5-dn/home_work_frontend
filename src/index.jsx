import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const rrrr = document.getElementById("root");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// let a = 0;
// function tick() {
//   a++;
//   const timer = (
//     <div>
//       <h1 contentEditable className="Hello">
//         Hello
//       </h1>
//       {a}
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   root.render(timer);
// }
// setInterval(() => {
//   tick();
// }, 500);

reportWebVitals();

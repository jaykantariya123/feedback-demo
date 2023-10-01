import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
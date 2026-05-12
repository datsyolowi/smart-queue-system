import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { QueueProvider } from "./context/QueueContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueueProvider>
      <App />
    </QueueProvider>
  </React.StrictMode>
);
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import KorzinaContext from "./context/KorzinaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <KorzinaContext>
        <App/>
      </KorzinaContext>
    </React.StrictMode>
  );

import React from "react";
import RegisterPages from "./pages/registerPages";
import"./styles/App.css";

export default function App() {
  return (
    <div className="Principal">
      <div>
        <h1 className="Text-Primary">
        Bem-vindo ao Sistema CRAS
      </h1>
      </div>
      <div className="RegisterForms">
      <RegisterPages />
      </div>
    </div>
  );
}

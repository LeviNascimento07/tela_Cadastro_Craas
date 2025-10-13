import React from "react";
import AuthPage from "./pages/AuthPages"; 
import "./styles/App.css";

export default function App() {
  return (
    <div className="Principal">
      <div>
        <h1 className="Text-Primary">Bem-vindo ao Sistema CRAS</h1>
      </div>

      <div className="auth-pages">
        <AuthPage /> {/* nome correto */}
      </div>
    </div>
  );
}

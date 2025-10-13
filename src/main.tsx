// main.tsx
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// 👇 Log para confirmar se o bundle React iniciou
console.log("✅ App inicializando — main.tsx carregado");

// Monta o React na div #root
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Elemento #root não encontrado no index.html");
} else {
  createRoot(rootElement).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  console.log("🚀 React renderizado dentro do HashRouter");
}

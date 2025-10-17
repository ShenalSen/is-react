import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AsgardeoProvider } from "@asgardeo/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="7HSPIiXQN5YS81ZSBNEJ0K74xmwa"
      baseUrl="https://localhost:9443"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppSetupProvider from "./providers/appSetupProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppSetupProvider>
        <App />
      </AppSetupProvider>
    </BrowserRouter>
  </StrictMode>
);

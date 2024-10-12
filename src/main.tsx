import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "antd/dist/reset.css";
import "./assets/fonts/fonts.css";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#e00000",
        colorBgContainer: "#f5f5f5",
      },
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ConfigProvider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/style.css";
import { StyledEngineProvider } from "@mui/material";
import store from '../providers/store/store.js'
import { Provider } from "react-redux";
import Layout from "../components/layout/layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <StyledEngineProvider>
        <Layout/>
      </StyledEngineProvider>
    </Provider>
  </StrictMode>
);

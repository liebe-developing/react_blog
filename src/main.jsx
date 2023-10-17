import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Toaster
          toastOptions={{
            className: `text-[#22c35e] text-xs sm:text-sm leading-6 bg-gray-100`,
          }}
        />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

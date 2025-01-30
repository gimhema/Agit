import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18에서는 반드시 'react-dom/client'를 사용해야 함
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

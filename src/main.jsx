import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "../Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

import { createRoot } from "react-dom/client";

import { App } from "./app";

const element = document.getElementById("app");
const root = createRoot(element);
root.render(<App />);

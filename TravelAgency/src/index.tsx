import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementTravelAgency } from "./screens/ElementTravelAgency";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementTravelAgency />);

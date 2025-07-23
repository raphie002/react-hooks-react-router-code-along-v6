// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js"; // Import your routes configuration

const router = createBrowserRouter(routes); // Pass the routes array

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
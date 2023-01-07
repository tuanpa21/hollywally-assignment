import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Excersise1 from "./ex-1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/ex-1",
    element: <Excersise1 />
  }
]);

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./layout/BaseLayout.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./appStore.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./appRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </StrictMode>,
);

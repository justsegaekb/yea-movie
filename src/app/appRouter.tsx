import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { Page as Main } from "@/pages/main";
import { Page as Movie } from "@/pages/movie";
import { ErrorBoundary } from "@/pages/error/ui/Page";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
]);

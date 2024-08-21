import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { ErrorBoundary } from "@/pages/error/ui/Page";
import { MainPage } from "@/pages/main";
import { MoviePage } from "@/pages/movie";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);

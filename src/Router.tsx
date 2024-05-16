import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { AppLayout } from "./layout/AppLayout";
import { LangChangePage } from "./langchange/LangChangePage";


export const Router: FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LangChangePage />,
        },
        {
          path: "/:lang/home",
          element: <Home />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

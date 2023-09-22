import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Welcome } from "./App.jsx";
import { BasicButton } from "./App.jsx";
import "./index.css";
import ErrorPage from "./error-page.jsx";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact.jsx";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.jsx";
import EditContact, { action as editAction } from "./routes/edit.jsx";
import { action as destroyAction } from "./routes/destroy.jsx";
import Index from "./routes/index.jsx";
import Balls from "./routes/balls.jsx";
import { Flex, Spacer } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oh fuck, something went wrong!</div>,
          },
        ],
      },
    ],
  },
]);

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Balls />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Index /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*{<RouterProvider router={router} />}*/}
    {<RouterProvider router={router1} />}
  </React.StrictMode>
);

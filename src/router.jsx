import { createBrowserRouter } from "react-router";

import Home from './pages/Home/Home';
import Characters from "./pages/Characters/Characters";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/404/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
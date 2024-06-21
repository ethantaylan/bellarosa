import { About } from "../pages/about/about";
import { Blog } from "../pages/blog/blog";
import { Contact } from "../pages/contact/contact";
import { Home } from "../pages/home/home";
import { Menu } from "../pages/menu/menu";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
];

import { createBrowserRouter } from "react-router-dom";
import AyurvedaHome from "./pages/AyrvedaHome";
import Article from "./pages/ArticleDetails";
import AyurvedaArticlesList from "./pages/ArticlesList";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AyurvedaHome />,
    children: [
      {
        path: '/home',
        element: <AyurvedaHome />
      }
    ]
  },
  {
    path: "/article/:id",
    element: <Article />,
  },
  {
    path: "/articles",
    element: <AyurvedaArticlesList />
  },
  {
    path: "/ContactUs",
    element: <ContactUs />
  },
  {
    path: "/AboutUs",
    element: <AboutUs />
  }
]);

export default router;

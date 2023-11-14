import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import NewVideo from "../pages/new_video";
import NotFound from "../pages/not_found";
import Category from "../pages/category";
import Video from "../pages/video";

export const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "categories/:category",
        element: <Category />
      },
      {
        path: "categories/:category/video/:code",
        element: <Video />
      },
      {
        path: "create-video",
        element: <NewVideo />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

/* 
<Routes >
  <Route path="/" element={<Home />} />
  <Route path="/create-video" element={<NewVideo />} />
  <Route path="/create-category" element={<NewCategory />} />
  <Route path="/categories/:category" element={<Category />} />
  <Route path="/categories/:category/video/:code" element={<Video />} />
  <Route path="/*" element={<NotFound />} />
</Routes> 
*/
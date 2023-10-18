import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import NewVideo from "./pages/new_video"
import NewCategory from "./pages/new_category"
import Category from './pages/category'
import Video from './pages/video'
import NotFound from './pages/not_found'
function App() {
  return (
    <BrowserRouter basename="/see-really">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/create-video" element={<NewVideo />} />
        <Route path="/create-category" element={<NewCategory />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/categories/:category/video/:code" element={<Video />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;

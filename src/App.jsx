import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
import NewVideo from "./pages/new_video"
function App() {
  return (
    <BrowserRouter basename="/see-really">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/create-video" element={<NewVideo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;

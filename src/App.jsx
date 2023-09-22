import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-video" element={<div>Create new video</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App

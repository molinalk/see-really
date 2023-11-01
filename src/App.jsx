import SeeReallyProvider from "./context";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <SeeReallyProvider>
      <Header />
      <Outlet />
      <Footer />
    </SeeReallyProvider>
  )
}
export default App;

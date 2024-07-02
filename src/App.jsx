import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Donor from "./pages/Donor"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/donor" element={<Donor/>}/>
      </Routes>
    </>
  );
}

export default App;

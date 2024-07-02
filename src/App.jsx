import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Reportbloodrequest from "./pages/Reportbloodrequest";
import Reportdonor from "./pages/Reportdonor";
import Request from "./pages/Request";
import Donor from "./pages/Donor";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donor" element={<Donor />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reportbloodrequest" element={<Reportbloodrequest />} />
        <Route path="/Reportdonor" element={<Reportdonor />} />
        <Route path="/Request" element={<Request />} />
      </Routes>
    </>
  );
}

export default App;

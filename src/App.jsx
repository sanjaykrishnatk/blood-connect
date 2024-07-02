
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";

import Request from "./pages/Request";
import Donor from "./pages/Donor";
import Reportbloodrequest from "./pages/Reportbloodrequest";
import Reportdonor from "./pages/Reportdonor";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
  
        <Route path="/request" element={<Request />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/report-donor" element={<Reportdonor />} />
        <Route path="/report-bloodrequest" element={<Reportbloodrequest />} />
      </Routes>
    </>
  );
}

export default App;

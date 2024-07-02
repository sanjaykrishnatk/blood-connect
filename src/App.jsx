import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './components/Dashboard';
import Request from "./pages/Request";
import Donor from "./pages/Donor";
import Reportbloodrequest from "./pages/Reportbloodrequest";
import Reportdonor from "./pages/Reportdonor";
import "bootstrap/dist/css/bootstrap.min.css";





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/report-donor" element={<Reportdonor />} />
        <Route path="/report-bloodrequest" element={<Reportbloodrequest />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;

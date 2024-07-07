import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Donor from "./pages/Donor";
import Dashboard from "./components/Dashboard";
import Reportbloodrequest from "./pages/Reportbloodrequest";
import Reportdonor from "./pages/Reportdonor";
import Request from "./pages/Request";
import "bootstrap/dist/css/bootstrap.min.css";
import SlidingForm from "./pages/Slidingform";
import Donorpage from "./pages/Donorpage";
import Donorhistory from "./pages/Donorhistory";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reportbloodrequest" element={<Reportbloodrequest />} />
        <Route path="/Reportdonor" element={<Reportdonor />} />
        <Route path="/SlidingForm" element={<SlidingForm />} />
        <Route path="/donorpage" element={<Donorpage/>} />
        <Route path="/donorhistory" element={<Donorhistory/>} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;

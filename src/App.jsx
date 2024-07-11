import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Donor from "./pages/Donor";
import Dashboard from "./components/Dashboard";
import Reportbloodrequest from "./pages/Reportbloodrequest";
import Reportdonor from "./pages/Reportdonor";
import Request from "./pages/Request";
import "bootstrap/dist/css/bootstrap.min.css";
import Donorpage from "./pages/Donorpage";
import Donorhistory from "./pages/Donorhistory";
import Footer from "./components/Footer";
import UserDashboard from "./components/UserDashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import DonorDashboard from "./components/DonorDasboard";
import UserBloodRequestReport from "./components/UserBloodRequestReport";
import AcceptRequest from "./pages/AcceptRequest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Reportbloodrequest" element={<Reportbloodrequest />} />
        <Route path="/Reportdonor" element={<Reportdonor />} />
        {/* <Route path="/donorpage" element={<Donorpage/>} /> */}
        <Route path="/donorhistory" element={<Donorhistory />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserBloodRequestReport" element={<UserBloodRequestReport />} />
        <Route path="/donorpage" element={<DonorDashboard />} />
        <Route path="/accept" element={<AcceptRequest />} />
      </Routes>
      <ToastContainer theme="colored" position="top-center" autoClose="2000" />
      <Footer />
    </>
  );
}

export default App;

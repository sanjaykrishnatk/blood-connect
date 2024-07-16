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
import AdminLogin from "./pages/AdminLogin";
import Lenis from "lenis";

function App() {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/admin" element={<Dashboard home={true} />} />
        <Route path="/admin_requests" element={<Dashboard requests={true} />} />
        <Route path="/admin_donors" element={<Dashboard donorsPage={true} />} />
        <Route
          path="/admin_recipients"
          element={<Dashboard recipients={true} />}
        />
        <Route
          path="/userdashboard"
          element={<UserDashboard userHome={true} />}
        />
        <Route
          path="/user_requests"
          element={<UserDashboard userRequests={true} />}
        />
        <Route
          path="/donorpage"
          element={<DonorDashboard donorHome={true} />}
        />
        <Route
          path="/donor_requests"
          element={<DonorDashboard donorRequests={true} />}
        />
        <Route
          path="/donor_history"
          element={<DonorDashboard donorHistory={true} />}
        />

        <Route path="/requestreport" element={<UserBloodRequestReport />} />
        <Route path="/accept" element={<AcceptRequest />} />
      </Routes>
      <ToastContainer position="top-center" autoClose="2000" />

      {/* <Footer /> */}
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;

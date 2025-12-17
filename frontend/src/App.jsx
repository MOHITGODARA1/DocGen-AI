import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Login from "./auth/login";
import Signup from "./auth/Singup";
import DashbordPage from "./pages/DashbordPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashbord" element={<DashbordPage />} />
      </Routes>
    </>
  );
}

export default App;

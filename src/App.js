import TitleBar from "./components/TitleBar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUpFire from "./pages/SignUpFire";

export default function App(){
  return(
    <div className="app--container">
      <TitleBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpFire />} />
      </Routes>
    </div>
  )
}
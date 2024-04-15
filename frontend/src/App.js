
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Calendar from "./pages/calendar/Calendar";
 
export default function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Signup />}/> 
          
          <Route path="Signup" element={<Signup />} /> 
          <Route path="Login" element={<Login/>} /> 
          <Route path="Calendar" element={<Calendar/>} /> 
      </Routes> 
    </BrowserRouter> 
  ); 
}

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Calendar from "./pages/calendar/Calendar";
import AddEvent from "./components/add-event/addevent";
import Hovo from "./pages/hovo/Hovo";
 
export default function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Login />}/> 
          
          <Route path="Login" element={<Login/>} /> 
          <Route path="Signup" element={<Signup />} />
          <Route path="Calendar" element={<Calendar/>} /> 
          <Route path="Addevent" element={<AddEvent/>} />
          <Route path="Hovo" element={<Hovo/>} />
          
      </Routes> 
    </BrowserRouter> 
  ); 
}
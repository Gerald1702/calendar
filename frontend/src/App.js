import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Calendar from "./pages/calendar/Calendar";
import AddEvent from "./components/add-event/addevent";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="Calender" element={<Calendar />} />
        <Route path="Addevent" element={<AddEvent />} />
       
      
      </Routes>
    </BrowserRouter>
  );
}

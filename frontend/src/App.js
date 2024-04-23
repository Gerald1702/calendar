import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import AddEvent from "./components/add-event/addevent";
import MyCalendar from "./pages/calendar/Calendar";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/addevent" element={<AddEvent />} />
       
      
      </Routes>
    </BrowserRouter>
  );
}

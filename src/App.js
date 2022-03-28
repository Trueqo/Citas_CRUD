import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListAppointment from "./pages/ListAppointment";
import CreateAppointment from "./pages/CreateAppointment";
import EditAppointment from "./pages/EditAppointment";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-appointment" element={<ListAppointment />} />
        <Route path="/create-appointment" element={<CreateAppointment />} />
        <Route path="/edit-appointment/:id" element={<EditAppointment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

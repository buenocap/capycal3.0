import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";

export default function App() {
  localStorage.setItem("loginStatus", JSON.stringify(false));

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Calendar />} />
          <Route path="/login" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Starters from "./Components/Starters";
import MainCourse from "./Components/Main Course";
import Rolls from "./Components/Rolls";
import Breads from "./Components/Breads";
import Beverages from "./Components/Beverages";
import Contact from "./Components/Contact";
import Timings from "./Components/Timings";
import Address from "./Components/Address";


export default function App() {
  return (
    
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Starters" element={<Starters />} />
          <Route path="/Main Course" element={<MainCourse />} />
          <Route path="/Rolls" element={<Rolls />} />
          <Route path="/Breads" element={<Breads />} />
          <Route path="/Beverages" element={<Beverages />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Address" element={<Address />} />
          <Route path="/Timings" element={<Timings />} />
        </Routes>
      </Router>
    </>
  );
}

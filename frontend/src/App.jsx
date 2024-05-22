import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import OperatingRoom from "./components/OperatingRoom";
import Planning from "./components/Planning";
import { useState } from "react";
import Admin from "./components/Admin";
import Algorithm from "./components/Algorithm";
import Visual from "./components/Visual";



function App() {
  const [form, setForm] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Home" element={<Home handleInputChange={handleInputChange} form={form} />} />
          <Route path="/Home/operatingroom" element={<OperatingRoom handleInputChange={handleInputChange} form={form} /> } />
          <Route path="/Home/operatingroom/planning" element={<Planning handleInputChange={handleInputChange} form={form} />} />
          <Route path="/Home/admin" element={<Admin/>} />
          <Route path="/Home/algorithm" element={<Algorithm/>}/>
          <Route path="/Home/algorithm/visual" element ={<Visual/>} ></Route>
      
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <MainBody />
                <FeaturesSection />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

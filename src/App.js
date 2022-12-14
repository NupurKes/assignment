import "./App.css";
import Home from  "./pages/Home";
import Contact from  "./pages/Contact";
import Education from "./pages/Education";
import Hobbies from "./pages/Hobbies";
import About from  "./pages/About";
import { Route , Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
return (
<div>  
 <Routes>
 <Route path="/" element={<MainLayout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="education" element={<Education />} />
    <Route path="hobbies" element={<Hobbies />} />
    <Route path="contact" element={<Contact />} /> 
</Route>
<Route path="*" element={<p>Invalid URL</p>} />
    </Routes>
</div>);
}

export default App;
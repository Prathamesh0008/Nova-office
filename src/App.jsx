import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} /> 
         Example: add more pages later 
        <Route path="*" element={<Navigate to="/" replace />} />
      {/* <Footer></Footer> */}
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    <Contact></Contact>
    <About></About>
    <br /><br />
    <Blog></Blog>
    <Navbar></Navbar>
</>
  );
}

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Tutorials from "./Tutorials";
import HomePage from "./Html/HomePage";
import AboutUs from "./AboutUs";
import Page1 from "./Html/Page1";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact  path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Tutorials" element={<Tutorials />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Html/HomePage" element={<HomePage />} />
        <Route path="/Html/Page1" element={<Page1 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

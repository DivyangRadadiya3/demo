import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tutorials from "./Tutorials";
import AboutUs from "./AboutUs";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact  path="/Home" element={<Home />} />
        <Route path="/Tutorials" element={<Tutorials />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

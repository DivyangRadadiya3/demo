import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Tutorials from "./Tutorials";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact  path="/Home" element={<Home />} />
        <Route path="/Tutorials" element={<Tutorials />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

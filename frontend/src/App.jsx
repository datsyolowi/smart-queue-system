import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Admin from "./pages/Admin";
import Display from "./pages/Display";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/display" element={<Display />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Admin from "./pages/Admin";
import Display from "./pages/Display";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >

        <Routes
          location={location}
          key={location.pathname}
        >

          <Route path="/" element={<Home />} />

          <Route path="/queue" element={<Queue />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/display" element={<Display />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </motion.div>

    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
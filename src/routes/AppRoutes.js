import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import Employers from "../pages/Employers/Employers";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import JobDetails from "../pages/JobDetails/JobDetails";
import Apply from "../pages/Apply/Apply";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:jobId" element={<JobDetails />} />
      <Route path="/apply/:jobId" element={<Apply />} />
      <Route path="/employers" element={<Employers />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
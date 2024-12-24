import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import HomeLayout from "./layout/home";
import Course from "./pages/Course";
import ContactUs from "./pages/contact";
import CoursePage from "./pages/courseDetail";
import ScrollToTop from "./components/shared/scollTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/:course" element={<CoursePage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// pages
import Styles from "~/Pages/Styles";
import Home from "~/Pages/Home";
import Journal from "~/Pages/Journal";
import About from "~/Pages/About";
import Careers from "~/Pages/Careers";
import Article from "./Pages/Article";
import { useLayoutEffect } from "react";

// fix react router not resetting scroll postion
// https://medium.com/@caden0002/fixing-scroll-position-issues-in-react-router-scroll-to-top-on-navigation-86bcfbdfc9db
const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <>
      {/* base from vite config */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

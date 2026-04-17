import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Styles from "~/Pages/Styles";
import Home from "~/Pages/Home";

function App() {
  return (
    <>
      {/* base from vite config */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

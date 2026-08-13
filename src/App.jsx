import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./page.jsx";
import TestingPage from "./testing/page.jsx";
import ResultPage from "./result/page.jsx";
import CameraPage from "./camera/capture/page.jsx";
import SelectPage from "./select/page.jsx";
import SummaryPage from "./summary/page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

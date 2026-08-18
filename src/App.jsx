import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SkinstricProvider } from "./context/SkinstricContext.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./home/page.jsx";
import TestingPage from "./testing/page.jsx";
import ResultPage from "./result/page.jsx";
import CameraPage from "./camera/capture/page.jsx";
import SelectPage from "./select/page.jsx";
import SummaryPage from "./summary/page.jsx";

function App() {
  return (
    <SkinstricProvider>
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
    </SkinstricProvider>
  );
}

export default App;
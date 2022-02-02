import "../src/styles/styles.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToAdopt from "./components/ToAdopt";
import Home from "./components/Home";
import Associations from "./components/Associations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<ToAdopt />} />
          <Route path="/associations" element={<Associations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

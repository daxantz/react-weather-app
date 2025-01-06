import { BrowserRouter as Router, Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/index";
import City from "./pages/city/index";
import Header from "./components/Header";

const App = () => {
  // Use state for dynamic cities list

  return (
    <Router>
      <div className="flex  ">
        <Sidebar />
        <div className="w-[75%] ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:name" element={<City />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

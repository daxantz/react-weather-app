import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import City from "./pages/City";

const App: React.FC = () => {
  // Use state for dynamic cities list
  const [cities, setCities] = useState<string[]>(["london", "paris"]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {cities.map((city) => (
              <li key={city}>
                <Link to={`/city/${city}`}>{city}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sidebar />
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/city/:cityId" element={<p>City</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

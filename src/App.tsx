import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/index";
import City from "./pages/city/index";
import Header from "./components/Header";
import Weather from "./types/weather";
const App: React.FC = () => {
  // Use state for dynamic cities list
  const [cities, setCities] = useState<Weather[]>([]);
  const [query, setQuery] = useState<string>("");

  return (
    <Router>
      <div className="flex h-[100vh]">
        {/* <nav>
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
        </nav> */}
        <Sidebar
          setQuery={setQuery}
          query={query}
          cities={cities}
          setCities={setCities}
        />
        <div className="w-full ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/city/:cityId"
              element={
                cities.length > 0 ? (
                  <City query={query} setCities={setCities} cities={cities} />
                ) : (
                  <p>Search for a city to get started</p>
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

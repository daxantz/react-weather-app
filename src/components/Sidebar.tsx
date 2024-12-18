import React from "react";
import CityLink from "./CityLink";
const placeholderData = [
  { country: "United Kingdom", name: "London", temp: 17 },
  { country: "Brazil", name: "Rio", temp: 64 },
  { country: "Austrailia", name: "sydney", temp: 77 },
];

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="flex gap-5 p-20">
        <img className="w-[50px]" src="/logo.png" alt="" />
        <div>
          <h1 className="uppercase text-lg">byforecast</h1>
          <p className="text-base font-light">Find the perfect weather</p>
        </div>
      </div>
      <div>
        <div className="icon">🇯🇵</div>
        <p>Current Location</p>
        <p>United Kingdom - London</p>
      </div>
      <input type="text" placeholder="Current Location..." />
      <div>
        {placeholderData.map((item) => (
          <CityLink {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

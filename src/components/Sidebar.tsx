import React from "react";
import CityLink from "./CityLink";
import { Link } from "react-router";
const placeholderData = [
  { country: "UK", name: "London", temp: 17, id: 24 },
  { country: "Br", name: "Rio", temp: 64, id: 532 },
  { country: "Au", name: "sydney", temp: 77, id: 444 },
];

const Sidebar: React.FC = () => {
  return (
    <div className="p-5 border border-black w-[25%]">
      <div className="flex-col gap-5 flex ">
        <Link to="/">
          <div className="flex p-20 gap-5">
            <img className="w-12" src="/logo.png" alt="" />
            <div>
              <h1 className="uppercase text-lg font-normal">byforecast</h1>
              <p className="text-sm font-thin">Find the perfect weather</p>
            </div>
          </div>
        </Link>

        <div className="flex items-center border uppercase gap-5">
          <div className="rounded-md  bg-slate-300 w-12 h-12 py-2 px-5 flex justify-center items-center">
            🏴󠁧󠁢󠁥󠁮󠁧󠁿
          </div>
          <div>
            <p className="text-blue-950 font-light">Current Location</p>
            <p>United Kingdom - London</p>
          </div>
        </div>
        <input
          className="w-full bg-slate-300 p-2 rounded-md mb-5 "
          type="text"
          placeholder="Current Location..."
        />
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {placeholderData.map((item) => (
            <CityLink {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

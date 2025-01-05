import React, { useState } from "react";
import CityLink from "./CityLink";
import { Link } from "react-router";
import Weather from "../types/weather";
import { get } from "country-flag-emoji";

type SidebarProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  cities: Weather[];
  setCities: React.Dispatch<React.SetStateAction<Weather[]>>;
};

const Sidebar: React.FC<SidebarProps> = ({
  setQuery,
  query,
  cities,
  setCities,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<Weather | undefined>();

  async function getWeather() {
    try {
      setIsLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}?q=${query}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=imperial`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      } else {
        const data = (await res.json()) as Weather;

        setCities((cities) => {
          if (cities.find((city) => city.id === data.id)) return cities;

          return [...cities, data];
        });
        const city = cities.find((city) => city.name === data.name);
        setCurrentCity(city);
        console.log(city);
        console.log(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        setFetchError(error.message);
      } else {
        setFetchError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const foundCity = cities.find((city) => city.name === query);
    if (foundCity) {
      //check if city was already added to list , add to list if it doesnt
      throw new Error("this city was already added");
    }

    getWeather();

    setQuery("");
  }

  return (
    <div className="p-5 border border-r-3 w-[25%]">
      <div className="flex-col gap-5 flex ">
        <Link to="/">
          <div className="flex p-10 gap-5">
            <img className="w-12" src="/logo.png" alt="" />
            <div>
              <h1 className="uppercase text-lg font-normal">byforecast</h1>
              <p className="text-sm font-thin">Find the perfect weather</p>
            </div>
          </div>
        </Link>

        <div className="flex items-center border uppercase gap-5">
          <div className="rounded-md  bg-slate-300 w-12 h-12 py-2 px-5 flex justify-center items-center">
            {get(currentCity?.sys.country).emoji}
          </div>
          <div>
            <p className="text-blue-950 font-light">Current Location</p>
            <p>{currentCity?.name}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full bg-slate-300 p-2 rounded-md mb-5 "
            type="text"
            placeholder="Current Location..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {cities.map((item) => (
            <CityLink
              {...item}
              key={item.id}
              setCities={setCities}
              setCurrentCity={setCurrentCity}
              cities={cities}
            />
          ))}
        </div>
      </div>
      {isLoading && <span>{isLoading}</span>}
      {fetchError && <span>{fetchError}</span>}
    </div>
  );
};

export default Sidebar;

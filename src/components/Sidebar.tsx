import React, { useState } from "react";
import CityLink from "./CityLink";
import { Link, useNavigate } from "react-router";
import Weather from "../types/weather";
import { get } from "country-flag-emoji";

const Sidebar = () => {
  const [cities, setCities] = useState<Weather[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<Weather | undefined>();
  const navigate = useNavigate();
  async function getWeather(city: string) {
    try {
      setIsLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=imperial`
      );
      console.log(res);
      if (!res.ok) {
        throw new Error(`Enter a city that exists`);
      } else {
        const data = (await res.json()) as Weather;

        setCities((cities) => {
          if (cities.find((city) => city.id === data.id)) return cities;

          return [...cities, data];
        });

        setCurrentCity(data);
        navigate(`/city/${data.name}`);

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
    getWeather(query);
    setQuery("");
    setFetchError("");
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
            {get(currentCity?.sys.country || "US").emoji}
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
        {fetchError && <span className="text-red-500">{fetchError}</span>}
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
    </div>
  );
};

export default Sidebar;

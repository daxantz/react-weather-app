import { Link } from "react-router";
import Weather from "../types/weather";
import { get } from "country-flag-emoji";
const CityLink = (
  cityWeather: Weather & {
    setCities: React.Dispatch<React.SetStateAction<Weather[]>>;
    setCurrentCity: React.Dispatch<React.SetStateAction<Weather | undefined>>;
    cities: Weather[];
  }
) => {
  const { setCities, setCurrentCity, cities } = cityWeather;

  function deleteCity(id: number) {
    setCities((cities) => {
      return cities.filter((city) => city.id !== id);
    });
  }

  function setCity() {
    const selectedCity = cities.find((city) => city.id === cityWeather.id);
    setCurrentCity(selectedCity);
  }

  return (
    <div className="flex justify-around items-center border uppercase">
      <div className="flex items-center w-72 gap-3  ">
        <div
          onClick={() => deleteCity(cityWeather.id)}
          className="rounded-md bg-slate-300 w-9 py-2 px-5 flex justify-center"
        >
          {get(cityWeather.sys.country).emoji}
        </div>
        <div className="flex gap-5 ml-5">
          <span>{cityWeather.sys.country}</span>
          <span>{cityWeather.name}</span>
        </div>
      </div>
      <div className="flex gap-5">
        <span>{cityWeather.main.temp}&deg;F</span>
        <Link to={`city/${cityWeather.id}`}>
          {" "}
          <span onClick={setCity}>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default CityLink;

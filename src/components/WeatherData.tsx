type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string; // e.g., "Rain"
    description: string; // e.g., "light rain"
    icon: string; // e.g., "10d"
  }[];
  main: {
    temp: number; // Temperature in Kelvin
    feels_like: number; // Feels-like temperature
    temp_min: number; // Minimum temperature
    temp_max: number; // Maximum temperature
    pressure: number; // Atmospheric pressure
    humidity: number; // Humidity percentage
  };
  wind: {
    speed: number; // Wind speed
    deg: number; // Wind direction
  };
  clouds: {
    all: number; // Cloudiness percentage
  };
  sys: {
    country: string; // Country code, e.g., "US"
    sunrise: number; // Sunrise time (UNIX timestamp)
    sunset: number; // Sunset time (UNIX timestamp)
    id: number;
  };
  name: string; // City name
  dt: number; // Data calculation time (UNIX timestamp)
};

type WeatherDataProps = {
  currentWeather: Weather;
};

const WeatherData = ({ currentWeather }: WeatherDataProps) => {
  return (
    <div className="flex ">
      <div className="border border-pink-400 w-[60%] p-16">
        <h2>Home - Your Location</h2>
        <div className="flex flex-col border border-blue-600 bg-[url('/cloudbg.png')] object-contain text-white bg-slate-700 p-7 mb-16">
          <div className="flex gap-3 mb-3">
            <img className="w-14  " src="/clouds.png" alt="" />
            <span>
              {currentWeather.weather[0]?.description || "No description"}
            </span>
          </div>
          <span className="text-6xl mb-3 ">
            {currentWeather.main?.temp
              ? `${Math.floor(currentWeather.main.temp)}°F`
              : "N/A"}
          </span>
          <span>{currentWeather.name || "Unknown location"}</span>
        </div>
        <p className="mb-4">Your Location</p>
        <div className="flex w-full border border-purple-600 gap-5 ">
          <div className="border border-red-600 w-48 flex flex-col items-center justify-center  bg-slate-600  text-white p-10">
            <h3>Feels Like</h3>
            <span className="text-5xl font-medium">
              {currentWeather.main?.feels_like
                ? `${Math.floor(currentWeather.main.feels_like)}°F`
                : "N/A"}
            </span>
          </div>
          <div className="border border-red-600 flex flex-col w-48  items-center justify-center  bg-slate-600  text-white ">
            <h3>Max Temp</h3>
            <span className="text-5xl font-medium">
              {Math.floor(currentWeather.main.temp_max)}&deg;F
            </span>
            <span>{currentWeather.weather[0].main}</span>
          </div>
          <div className="border border-red-600 bg-slate-600  text-white flex flex-col items-center justify-center w-48 ">
            <h3>Min Temp</h3>
            <span className="text-5xl font-medium ">
              {Math.floor(currentWeather.main.temp_min)}&deg;F
            </span>
            <span>{currentWeather.weather[0].main}</span>
          </div>
          <div className="border border-red-600 w-48 flex flex-col items-center justify-center  bg-slate-600  text-white">
            <h3>Humidity</h3>
            <span className="text-5xl font-medium">
              {currentWeather.main.humidity}%
            </span>
            <span>{currentWeather.weather[0].main}</span>
          </div>
        </div>
      </div>
      {/* side data */}
      <div className=" w-full">
        <div className="border  ">
          <div className="p-10">
            <img className="mb-4" src="/rain.png" alt="" />
            <div className="flex justify-between mb-4">
              <h4>Rain</h4>
              <span>00 mm</span>
            </div>
            <p>
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate
              symptoms from long-term exposure.
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="p-10">
            <img className="mb-4" src="/wind.png" alt="" />
            <div className="flex justify-between mb-4">
              <h4>Wind</h4>
              <span>{currentWeather.wind.speed} km/h</span>
            </div>
            <p>
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate
              symptoms from long-term exposure.
            </p>
          </div>
        </div>
        <div>
          <div className="p-10">
            <img className="mb-4" src="/clouds.png" alt="" />
            <div className="flex justify-between mb-4">
              <h4>Cloudy</h4>
              <span>{currentWeather.clouds.all}%</span>
            </div>
            <p>
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate
              symptoms from long-term exposure.
            </p>
          </div>
        </div>
        <div>
          <div className="p-10">
            <img className="mb-4" src="/water.png" alt="" />
            <div className="flex justify-between mb-4">
              <h4>Humidity</h4>
              <span>{currentWeather.main.humidity}%</span>
            </div>
            <p>
              The air quality is generally acceptable for most individuals.
              However, sensitive groups may experience minor to moderate
              symptoms from long-term exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import Image from "../types/image";
import Weather from "../types/weather";

type WeatherDataProps = {
  currentWeather: Weather | undefined;
};

const WeatherData = ({ currentWeather }: WeatherDataProps) => {
  const [weatherImages, setWeatherImages] = useState<Image[] | undefined>(
    undefined
  );
  const [isloading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  useEffect(() => {
    async function getWeatherImage() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `${import.meta.env.VITE_UNSPLASH_URL}client_id=${
            import.meta.env.VITE_UNSPLASH_KEY
          }&query=${
            currentWeather?.weather[0].main
          }&orientation=landscape&per_page=5`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else {
          const data = await res.json();
          console.log(data);
          setWeatherImages(data.results);
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
    getWeatherImage();
  }, [currentWeather?.weather]);

  return (
    <div className="flex ">
      <div className=" w-[60%] p-16">
        <h2>Home - Your Location</h2>
        <ImageSlider
          error={fetchError}
          isLoading={isloading}
          images={weatherImages}
        >
          <div className="text-slate-500">
            <div className="flex gap-3 mb-3 ">
              <span>
                {currentWeather?.weather[0]?.description || "No description"}
              </span>
            </div>
            <span className="text-6xl mb-3 block  ">
              {currentWeather?.main?.temp
                ? `${Math.floor(currentWeather.main.temp)}°F`
                : "N/A"}
            </span>
            <span className="text-2xl font-medium">
              {currentWeather?.name || "Unknown location"}
            </span>
          </div>
        </ImageSlider>

        {/* <p className="mb-4">Your Location</p> */}
        <div className="xl:flex lg:grid lg:grid-cols-2 lg:grid-rows-3  w-full  gap-5 ">
          <div className=" flex-1 flex flex-col items-center justify-center  bg-slate-600  text-white py-12 ">
            <h3>Feels Like</h3>
            <span className="text-5xl font-medium">
              {currentWeather?.main?.feels_like
                ? `${Math.floor(currentWeather.main.feels_like)}°F`
                : "N/A"}
            </span>
          </div>
          <div className=" flex flex-1 flex-col items-center justify-center  bg-slate-600  text-white ">
            <h3>Max Temp</h3>
            <span className="text-5xl font-medium">
              {currentWeather
                ? Math.floor(currentWeather.main.temp_max)
                : "error"}
              &deg;F
            </span>
            <span>
              {currentWeather ? currentWeather?.weather[0].main : "error"}
            </span>
          </div>
          <div className=" bg-slate-600  text-white flex flex-1 flex-col items-center justify-center  ">
            <h3>Min Temp</h3>
            <span className="text-5xl font-medium ">
              {currentWeather
                ? Math.floor(currentWeather.main.temp_min)
                : "error"}
              &deg;F
            </span>
            <span>{currentWeather?.weather[0].main}</span>
          </div>
          <div className="  flex flex-1 flex-col items-center justify-center  bg-slate-600  text-white">
            <h3>Humidity</h3>
            <span className="text-5xl font-medium">
              {currentWeather?.main.humidity}%
            </span>
            <span>{currentWeather?.weather[0].main}</span>
          </div>
        </div>
      </div>
      {/* side data */}
      <div className=" w-full border border-l-1">
        <div>
          <div className="p-10">
            <img className="mb-4" src="/rain.png" alt="" />
            <div className="flex justify-between mb-4">
              <h4>Rain</h4>
              <span>
                {currentWeather?.rain
                  ? currentWeather.rain["1h"] + "mm"
                  : "no rain data available"}
              </span>
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
              <span>{currentWeather?.wind.speed} km/h</span>
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
              <span>{currentWeather?.clouds.all}%</span>
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
              <span>{currentWeather?.main.humidity}%</span>
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

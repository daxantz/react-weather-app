import React, { useEffect, useState } from "react";
import WeatherData from "../../components/WeatherData";
import Weather from "../../types/weather";
const Home: React.FC = () => {
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationPosition | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition(position);
        console.log(position);
      },
      (err) => {
        setLocationError(err.message);
        console.log(err.message);
      }
    );
  }, []);
  console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    async function getWeather() {
      try {
        setIsLoading(true);
        if (currentPosition) {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}?lat=${
              currentPosition?.coords.latitude
            }&lon=${currentPosition?.coords.longitude}&appid=${
              import.meta.env.VITE_API_KEY
            }&units=imperial`
          );
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          } else {
            const data = (await res.json()) as Weather;
            setCurrentWeather(data);
            console.log(data);
          }
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
    getWeather();
  }, [
    currentPosition?.coords.latitude,
    currentPosition?.coords.longitude,
    currentPosition,
  ]);
  return (
    <div className="">
      {currentWeather ? (
        <WeatherData currentWeather={currentWeather} />
      ) : (
        <p>Loading weather data...</p>
      )}
      {fetchError && <p>Error fetching weather: {fetchError}</p>}
    </div>
  );
};

export default Home;

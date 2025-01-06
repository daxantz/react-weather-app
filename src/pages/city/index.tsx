import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Weather from "../../types/weather";
import WeatherData from "../../components/WeatherData";

const City = () => {
  const { name } = useParams<{ name: string }>();
  const [city, setCity] = useState<Weather | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    async function getWeather() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}?q=${name}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=imperial`
        );
        if (!res.ok) {
          throw new Error(`Couldn't find that city`);
        } else {
          const data = (await res.json()) as Weather;
          setCity(data);
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
  }, [name]);
  if (isLoading) return <p>Loading weather data...</p>;
  if (fetchError) return <p>{fetchError}</p>;

  return <WeatherData currentWeather={city} />;
};

export default City;

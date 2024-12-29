import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import Weather from "../../types/weather";
import WeatherData from "../../components/WeatherData";
type CityProps = {
  query: string;
  setCities: React.Dispatch<React.SetStateAction<Weather[]>>;
  cities: Weather[];
};
const City: React.FC<CityProps> = ({ cities }) => {
  const { cityId } = useParams<{ cityId: string }>();

  const currentCity = cities.find((city) => city.id === Number(cityId));

  return <WeatherData currentWeather={currentCity || cities[0]} />;
};

export default City;

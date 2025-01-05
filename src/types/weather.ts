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
  rain?: { "1h": number };
  id: number;
};

export default Weather;

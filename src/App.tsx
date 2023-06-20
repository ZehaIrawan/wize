import "./App.css";
import InfoCard from "./components/InfoCard/InfoCard";
import RadioButton from "./components/RadioButton/RadioButton";
import TempBar from "./components/TempBar/TempBar";
import TempBarGroup from "./components/TempBarGroup/TempBarGroup";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Skeleton from "./components/Skeleton/Skeleton";

interface WeatherDataItem {
  weather: {
    main: string;
  }[];
  main: {
    temp: number;
  };
  dt_txt: string;
}

function App(): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState<WeatherDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredWeatherData, setFilteredWeatherData] = useState<
    WeatherDataItem[]
  >([]);

  const previousDate = () => {
    if (filteredWeatherData.length === 0) {
      return;
    }

    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const nextDate = () => {
    if (filteredWeatherData.length === 0) {
      return;
    }

    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse = await axios.get(
          "http://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              q: "Kathmandu",
              // @ts-ignore:next-line
              appId: import.meta.env.VITE_WEATHER_API_KEY,
              cnt: 40,
              units: "metric",
            },
          },
        );
        setWeatherData(response.data.list);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredWeatherData(
      weatherData.filter(
        (item: WeatherDataItem) =>
          item.dt_txt.slice(8, 10) === currentDate.getDate().toString(),
      ),
    );
  }, [currentDate, weatherData]);

  const [selectedOption, setSelectedOption] = useState<string>("celcius");

  const lowestTemp = filteredWeatherData.reduce((minTemp, item) => {
    const temperature = item.main.temp;
    return temperature < minTemp ? temperature : minTemp;
  }, Infinity);

  const highestTemp = filteredWeatherData.reduce((maxTemp, item) => {
    const temperature = item.main.temp;
    return temperature > maxTemp ? temperature : maxTemp;
  }, -Infinity);

  if (isLoading || filteredWeatherData.length === 0) return <Skeleton />;

  return (
    <>
      <RadioButton
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <InfoCard
        selectedOption={selectedOption}
        previousDate={previousDate}
        nextDate={nextDate}
        weatherData={filteredWeatherData[0]}
      />

      <TempBarGroup>
        {filteredWeatherData.map((item) => (
          <TempBar
            lowestTemp={lowestTemp}
            highestTemp={highestTemp}
            key={item.dt_txt}
            weatherData={item}
            selectedOption={selectedOption}
          />
        ))}
      </TempBarGroup>
    </>
  );
}

export default App;

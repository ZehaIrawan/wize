import "./App.css";
import InfoCard from "./components/InfoCard/InfoCard";
import RadioButton from "./components/RadioButton/RadioButton";
import TempBar from "./components/TempBar/TempBar";
import TempBarGroup from "./components/TempBarGroup/TempBarGroup";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

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
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const nextDate = () => {
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
              appId: "11161feb64ba65936332e6341f7b2d06",
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

  console.log(weatherData, "weatherData");

  const [selectedOption, setSelectedOption] = useState<string>("celcius");

  const lowestTemp = filteredWeatherData.reduce((minTemp, item) => {
    const temperature = item.main.temp;
    return temperature < minTemp ? temperature : minTemp;
  }, Infinity);

  const highestTemp = filteredWeatherData.reduce((maxTemp, item) => {
    const temperature = item.main.temp;
    return temperature > maxTemp ? temperature : maxTemp;
  }, -Infinity);

  if (isLoading || filteredWeatherData.length === 0)
    return <div>Loading...</div>;

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

import "./App.css";
import InfoCard from "./components/InfoCard/InfoCard";
import RadioButton from "./components/RadioButton/RadioButton";
import TembBar from "./components/TempBar/TempBar";
import TembarGroup from "./components/TempBarGroup/TembarGroup";
import weatherData from "./mockup/data.json";
import { useState } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  const filteredWeatherData = weatherData.list.filter(
    (item) => item.dt_txt.slice(8, 10) === currentDate.getDate().toString(),
  );

  const [selectedOption, setSelectedOption] = useState<string>("celcius");

  const lowestTemp = filteredWeatherData.reduce((minTemp, item) => {
    const temperature = item.main.temp;
    return temperature < minTemp ? temperature : minTemp;
  }, Infinity);

  const highestTemp = filteredWeatherData.reduce((maxTemp, item) => {
    const temperature = item.main.temp;
    return temperature > maxTemp ? temperature : maxTemp;
  }, -Infinity);

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
      <TembarGroup>
        {filteredWeatherData.map((item) => {
          return (
            <TembBar
              lowestTemp={lowestTemp}
              highestTemp={highestTemp}
              key={item.dt}
              weatherData={item}
              selectedOption={selectedOption}
            />
          );
        })}
      </TembarGroup>
      {/* <div className="overlay"></div> */}
    </>
  );
}

export default App;

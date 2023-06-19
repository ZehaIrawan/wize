import "./App.css";
import InfoCard from "./components/InfoCard/InfoCard";
import RadioButton from "./components/RadioButton/RadioButton";
import TembBar from "./components/TempBar/TempBar";
import TembarGroup from "./components/TempBarGroup/TembarGroup";
import weatherData from "./mockup/data.json";
import { useState } from "react";

function App() {
  // const fakeWeatherData = Array.from(
  //   { length: 8 },
  //   () => Math.floor(Math.random() * 100) + 1,
  // );

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

  console.log(filteredWeatherData);
  return (
    <>
      <RadioButton />

      <InfoCard
        previousDate={previousDate}
        nextDate={nextDate}
        weatherData={filteredWeatherData[0]}
      />
      <TembarGroup>
        {filteredWeatherData.map((item) => {
          return <TembBar key={item.dt} weatherData={item} />;
        })}
      </TembarGroup>
      {/* <div className="overlay"></div> */}
    </>
  );
}

export default App;

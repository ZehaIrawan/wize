import "./App.css";
import InfoCard from "./components/InfoCard/InfoCard";
import RadioButton from "./components/RadioButton/RadioButton";
import TembBar from "./components/TempBar/TempBar";
import TembarGroup from "./components/TempBarGroup/TembarGroup";
import weatherClear from "./assets/Weather=Clear, Is Current=True.svg";

function App() {
  const weatherData = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 100) + 1,
  );

  return (
    <>
      <img src={weatherClear}></img>

      <RadioButton />

      <InfoCard />
      <TembarGroup>
        {weatherData.map((item, index) => {
          return <TembBar key={index} height={item} />;
        })}
      </TembarGroup>
    </>
  );
}

export default App;

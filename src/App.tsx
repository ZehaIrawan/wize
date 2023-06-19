import "./App.css";
import InfoCard from "./components/InfoCard/InfoCard";
import TembBar from "./components/TempBar/TempBar";
import TembarGroup from "./components/TempBarGroup/TembarGroup";

function App() {
  const weatherData = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 100) + 1,
  );

  return (
    <>
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

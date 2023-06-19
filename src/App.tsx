import "./App.css";
import InfoCard from "./components/InfoCard/InfoCard";
import TembBar from "./components/TempBar/TempBar";
import TembarGroup from "./components/TempBarGroup/TembarGroup";

function App() {
  const weatherData = Array(8).fill("item");

  return (
    <>
      <InfoCard />
      <TembarGroup>
        {weatherData.map((item, index) => {
          return <TembBar key={index} />;
        })}
      </TembarGroup>
    </>
  );
}

export default App;

import React, {useState} from "react";
import CalForm from "./components/Calculater/CalForm";
import TemperatureList from "./components/Calculater/TemperatureList";
import Formula from "./components/Calculater/Formula";

const App = ()=> {
  const [temperatureList,setTemperatureList] = useState([]);
  const addTemperatureData = (returnTemperature) => {
    setTemperatureList((previouseTemperaute) => {
      return ( [returnTemperature,...previouseTemperaute])
    })
  }


  return (
    <div>
      <h2 style={{textAlign: "center"}}>{`Fahrenheit  \<==\> Celsius`}</h2>
      <CalForm onAddTemperatureData={addTemperatureData} />
      <Formula />
      <TemperatureList items={temperatureList}/>
    </div>
  );
}

export default App;

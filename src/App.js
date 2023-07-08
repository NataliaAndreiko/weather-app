import  './App.css';
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import {useState} from "react";
import Weather from "./components/Weather";

function App() {
    const [weatherInfo, setWeatherInfo] = useState([]);
    const [isLocationValid, setIsLocationValid] = useState();

    return (
        <div className="weather_app">
            <Search setWeatherInfo={setWeatherInfo} setIsLocationValid={setIsLocationValid}/>
            {isLocationValid && <Weather weatherInfo={weatherInfo}/>}
            {isLocationValid === false && <NotFound/>}
        </div>
    );
}

export default App;

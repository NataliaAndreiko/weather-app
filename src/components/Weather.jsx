import "../styles/weather.scss"

const Weather = (props) => {
    const {weatherInfo} = props;
    let image;

    switch (weatherInfo.weather[0].main){
        case 'Clear':
            image = '../assets/images/clear.png';
            break;

        case 'Rain':
            image = require('../assets/images/rain.png');
            break;

        case 'Snow':
            image = require('../assets/images/snow.png');
            break;

        case 'Clouds':
            image = require('../assets/images/cloud.png');
            break;

        case 'Haze':
            image = require('../assets/images/mist.png');
            break;
        default:
            image = '';
    }

    return (
        <div className="weather">
            <img src={image} alt="" className="image"/>
            <p className="temp">{Math.round(weatherInfo.main.temp)}°C</p>
            <p className="description">{weatherInfo.weather[0].description}</p>

            <div className="weather-details">
                <div className="humidity">
                    <i className="fa-solid fa-water"></i>
                    <div className="text">
                        <span>{weatherInfo.main.humidity}%</span>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="wind">
                    <i className="fa-solid fa-wind"></i>
                    <div className="text">
                        <span>{Math.round(weatherInfo.wind.speed)} km/h</span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Weather;
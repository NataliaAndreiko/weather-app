import styles from "../styles/search.module.scss";
import {useState} from "react";
import axios from "axios";
const API_KEY = "f3359a1b8f25f269fced4f70d143299d";

const Search = (props) => {
    const {setWeatherInfo, setIsLocationValid} = props;
    const [location, setLocation] = useState("");

    const handleSetNewLocation = (e) => {
        setLocation(e.currentTarget.value);
    }

    const handleShowWeather = (e) => {
        e.preventDefault();

        if (location === ""){
            return;
        }

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
            .then(r => {
                setWeatherInfo(r.data);
                console.log(r.data);
                setIsLocationValid(true);
            })
            .catch(err => {
                setIsLocationValid(false);
            })
    }
    return (
        <form className={styles.form} onSubmit={handleShowWeather}>
            <i className={`${styles.fa} fa-solid fa-location-dot`}></i>
            <input type="text" className={styles.input} placeholder={"Enter your location"} value={location} onChange={handleSetNewLocation}/>
            <button className={styles.button}><i className={`${styles.fa} fa-solid fa-magnifying-glass`}></i></button>
        </form>
    )
}

export default Search;
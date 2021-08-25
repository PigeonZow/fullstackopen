import axios from "axios"
import { useEffect, useState } from "react"

const Country = (props) => {

    const [ weatherData, setWeatherData ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
        const access_key = process.env.REACT_APP_WEATHERSTACK_API_KEY
        axios.get(`http://api.weatherstack.com/current?access_key=${access_key}&query=${props.country.capital}`).then(response => {
            setWeatherData(response.data)
            setIsLoaded(true)
        })
    }, [props])

    if (isLoaded) {
        return (
            <div>
                <h1>{props.country.name}</h1>
                <p>capital {props.country.capital}</p>
                <p>population {props.country.population}</p>
                <h3>languages</h3>
                <ul>
                    {props.country.languages.map(language => (
                        <li>{language.name}</li>
                    ))}
                </ul>
                <img src={props.country.flag} alt={props.country.name}></img>
                <h3>Weather in {props.country.capital}</h3>
                <p><b>temperature: </b>{weatherData.current.temperature} celcius</p>
                <img src={weatherData.current.weather_icons[0]} alt="could not get weather"></img>
                <p><b>wind: </b>{weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
            </div> 
        )
    } else {
        return <div>Loading...</div>
    }

}
export { Country }
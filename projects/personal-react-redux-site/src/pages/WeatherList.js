import React from 'react'

function WeatherList(props) {

    return (
        <div className="weather-data">
            {props.city && props.country && <p> Location: {props.city}, {props.country}</p>}
            {props.temperature && <p> Temperature: {props.temperature} &#8457;</p>}
            {props.humidity && <p> Humidity: {props.humidity}</p>}
            {props.description && <p> Condition: {props.description}</p>}
         
        </div>
    )
}
export default WeatherList
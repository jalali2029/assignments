import React from "react"

function Home (props){
    return(
        <div className="home">
            
            <p>Weather forecasts are made by collecting as much data as possible about the current state of the atmosphere (particularly the temperature, humidity and wind) and using understanding of atmospheric processes (through meteorology) to determine how the atmosphere evolves in the future.

However, the chaotic nature of the atmosphere and incomplete understanding of the processes mean that forecasts become less accurate as the range of the forecast increases.

Traditional observations made at the surface of atmospheric pressure, temperature, wind speed, wind direction, humidity, precipitation are collected routinely from trained observers, automatic weather stations or buoys.

During the data assimilation process, information gained from the observations is used in conjunction with a numerical model's most recent forecast for the time that observations were made to produce the meteorological analysis.

Numerical weather prediction models are computer simulations of the atmosphere.

They take the analysis as the starting point and evolve the state of the atmosphere forward in time using understanding of physics and fluid dynamics.

The complicated equations which govern how the state of a fluid changes with time require supercomputers to solve them.</p>
            
        </div>
    )
}
export default Home
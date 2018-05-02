import React from "react"
import { getWeather } from "../redux/weather-api"
import { connect } from "react-redux"
import WeatherList from "./WeatherList.js"

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.initialState = {
            inputs: {
                city: "",
                country: "",
                isShowingAlert: false
            },
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.inputs.city === "" || this.state.inputs.country === "") {
            this.setState({
                isShowingAlert: true
            })
        }else {
            this.props.getWeather(this.state.inputs)
            this.setState({
                city: "",
                country: "",
                isShowingAlert: false
        })
        }

        

    }

    render() {
        console.log(this.props);
        const { loading, errMsg, weather } = this.props;

        //either we are waiting for data or not
        // not --> 
        //dont render anything
        // render the stuff that has already been requested
        // we are waiting --> loading
        if (loading) {
            return (
                <div>...loading</div>
            )
        }
        if (errMsg) {
            <div>{errMsg}</div>
        }
        if (weather.data.weather !== undefined) {

            var weatherComponents = weather.data.weather.map((forecast, i) => {
                return <WeatherList key={forecast.id + i}
                    weathert={weather.name + i}
                    country={weather.data.sys.country}
                    city={weather.data.name}
                    description={weather.data.weather[0].description}
                    humidity={weather.data.main.humidity}
                    temperature={(weather.data.main.temp * 9 / 5 - 459.67).toFixed(1)} />
            })
        }
        const { city, country } = this.state.inputs;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={city} type="text" name="city" placeholder="City..." />
                    <input onChange={this.handleChange} value={country} type="text" name="country" placeholder="Country..." />
                    <button>Get Weather</button>
                    {!this.state.isShowingAlert ?
                    <div></div>
                    :
                    <div className="alert"><p>Please Enter the Values</p></div>
                    }
                    {weatherComponents}


                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>  state;

export default connect(mapStateToProps, { getWeather })(Weather);
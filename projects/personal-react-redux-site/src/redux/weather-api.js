import axios from "axios";

const initialState = {
    data: {},
    loading: true,
    errMsg: ""
}
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_WEATHER":
            return {
                ...state,
                data: action.weather,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                errMsg: action.errMsg,
                loading: false
            }
        default:
            return state;
    }
}

export const getWeather = ({city, country}) => {
    // console.log(city, country)
    
    // city = city[0].toLowerCase() + city.slice(1);
    return dispatch => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=ece76aff7c60e9179106d4f367f20d2d`).then(response => {
            console.log(response.data)
            dispatch({
                type: "GET_WEATHER",
                weather: response.data
            })
        })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, the Requested data is not available"
                })
            })
    }
}

export default weatherReducer
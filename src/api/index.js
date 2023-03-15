import axios from 'axios'

const API_KEY = '1b078990e9d1bd52464587209277504a'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export function getWeatherData(city) {
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}
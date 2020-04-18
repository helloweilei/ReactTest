import request from './ApiUtil'
import jsonp from 'jsonp'

export function getSongCategoies() {
    return request.get('/songs/categories')
}

export function getWeather(city = '西安') {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    return new Promise((resolve, reject) => {
        jsonp(url, {}, (err, data) => {
            if (!err && data.status === 'success') {
                let { weather, dayPictureUrl } = data.results[0].weather_data[0]
                resolve({ weather, dayPictureUrl })
            } else {
                reject(err || 'get weather data failed')
            }
        })
    })
}
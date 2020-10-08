const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let apiKey = 'e8a032bdff1d599f2420695b7f1bacdb'

    // const instance = axios.create({
    //     baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`
    // });

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`);

    //console.log(resp.status);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
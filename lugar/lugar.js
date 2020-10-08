const axios = require('axios');

const getLugarLatLong = async(ip) => {

    const instance = axios.create({
        baseURL: `https://ip-geo-location.p.rapidapi.com/ip/${ip}`,
        headers: { 'X-RapidApi-Key': '603bf28c49mshd1b1f93e9386859p11381fjsna4bfdcaf2ba9' }
    });

    const resp = await instance.get();

    //console.log(resp.status);

    if (resp.status !== 200) {
        throw new Error(`La ${ip} ingresada no es valida. Error: ${resp.statusText}`);
    }

    const latitude = resp.data.location.latitude;
    const longitude = resp.data.location.longitude;

    return {
        latitude,
        longitude
    }
}

module.exports = {
    getLugarLatLong
}
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    ip: {
        alias: 'i',
        desc: 'IP de la cual quieres obtener los datos de localización',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

//const encodeUrl = encodeURI(argv.direccion); //retorna una url segura

// lugar.getLugarLatLong(argv.ip)
//     .then(console.log);

// clima.getClima(-33.4513, -70.6653)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(ip) => {

    try {
        const coordenadas = await lugar.getLugarLatLong(ip);
        const temperatura = await clima.getClima(coordenadas.latitude, coordenadas.longitude);

        return `El la temperatura de la zona según la IP ${ip} es de ${temperatura}ºC para las latitud de ${coordenadas.latitude} y longitud de ${coordenadas.longitude}`;
    } catch (error) {
        return `No se pudo determinar el clima de la IP ${ip}`;
    }
}

getInfo(argv.ip)
    .then(console.log)
    .catch(console.log);
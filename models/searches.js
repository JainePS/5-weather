const axios = require('axios');
class Searches {

    historical = ['Madrid', 'Roma', 'Rio de Janeiro'];

    constructor() {
        //TODO: to read DB, if exists
    }

    async city(place = '') {
        // request HTTP
        try {
            const res = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid%2C%20Madrid%2C%20Spain.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=en&access_token=pk.eyJ1IjoiamFpbmVzYW50b3MiLCJhIjoiY2xiZTBwYWFvMDBlNzNxcGJpc3JlMjFraCJ9.3eS7PqHGpTf4x-Vg2NUzZQ');
            console.log(res.data);

            return []
        }
        catch (error) {
            return []
        }

    }
}

module.exports = Searches;
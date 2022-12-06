const { default: axios } = require("axios");

class Searches {
    
    historical = ['Madrid', 'Roma', 'Rio de Janeiro'];

    constructor(){
        //TODO: to read DB, if exists
    }

    async city( place = ''){
        // request HTTP
        try{const resp = await axios.get('https://reqres.in/api/users?page=2')
        console.log(resp.data);
        return [];
    }catch(error){
        console.log('There is no place with this name');
        return [];
    }
    }

}

module.exports = Searches;
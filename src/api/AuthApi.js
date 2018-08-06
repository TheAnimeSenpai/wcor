import axios from 'axios';

const BASE_URL = 'http://localhost:1337';

export { login, getCelebrityData };

function login(username, password) {
    const url = `${BASE_URL}/api/login`;
    return axios.put(url, {
        username : username,
        password : password
    }).then(function(response) {
        return {
            status : 'success',
            token : response.headers['auth-token'],
            profile : response.data
        }
    }).catch(function(error) {
        var errorData = error.response.data;
        if(errorData.status >= 300 || errorData.status < 200) {
            //invalid details supplied or server error...return...
            return {
                status : 'error',
                message : errorData.message
            };
        }
        return {
            status : 'error',
            message : 'Error occured on the server. Kindly retry in a few minutes.'
        };
    });
}

function getCelebrityData() {
    const url = `${BASE_URL}/api/jokes/celebrity`;
    return axios.get(url).then(response => response.data);
}
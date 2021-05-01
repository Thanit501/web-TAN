import React from 'react';
import axios from 'axios';

const ComsumeAPI = async (method, path, token, data) => {
    var config = {
        method: method,
        url: 'http://localhost:4500/api/' + path,
        headers: {
            'Authorization': `Bearer $(token)`,
            'Content-Type': 'application/json'
        },
        data: data
    }
    return await axios(config)
    .then(function (response) {
        return JSON.parse(JSON.stringify(response.data))
    })
    .catch(function (error) {
        console(error)
    })
}
export default ComsumeAPI;
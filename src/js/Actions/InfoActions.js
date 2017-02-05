import axios from 'axios';

export function getInfoAboutProject () {
    console.log('Get Info Action');
    axios.get('http://localhost:8083/info')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}
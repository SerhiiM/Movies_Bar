import axios from 'axios';
import * as cnst from '../Common/constant';
import dispatcher from "../dispatcher";

export function getInfoAboutProject () {
    console.log('Get Info Action');
    axios.get('http://localhost:8083/info')
    .then(({data})=> {
        console.log(data);
        dispatcher.dispatch({type: cnst.RESEIVE_INFO, site_info: data.result })
    })
    .catch((error) =>{
        console.log(error);
    });
}
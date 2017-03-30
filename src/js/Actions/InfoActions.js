import axios from 'axios';
import * as cnst from '../Common/constant';
import { connect } from 'react-redux';

export function getInfoAboutProject (dispatch) {
    console.log(this,'Get Info Action');
    axios.get('http://localhost:8083/info')
    .then(({data})=> {
        console.log(data);
        dispatch({
            type: cnst.RECEIVE_NEW_INFO, 
            site_info: data.result 
        })
    })
    .catch((error) =>{
        console.log(error);
    });
}
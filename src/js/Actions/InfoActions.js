import axios from 'axios';
import * as cnst from '../Common/constant';
import {SERVER_PATH} from '../Common/links';
import { connect } from 'react-redux';

export function getInfoAboutProject (dispatch) {
    axios.get(`${SERVER_PATH}/info`)
    .then(({data})=> {
        dispatch({
            type: cnst.RECEIVE_NEW_INFO, 
            site_info: data.result 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}
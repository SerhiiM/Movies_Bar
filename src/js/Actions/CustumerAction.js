import axios from 'axios';
import * as cnst from '../Common/constant';
import {SERVER_PATH} from '../Common/links';
import { connect } from 'react-redux';

export function getCustumers (dispatch) {
    axios.get(`${SERVER_PATH}/api/customers`)
    .then(({data})=> {
        dispatch({
            type: cnst.RECEIVE_CUSTUMER_DATA, 
            customerData: data || [] 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}
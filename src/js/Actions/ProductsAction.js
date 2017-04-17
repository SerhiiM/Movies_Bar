import axios from 'axios';
import * as cnst from '../Common/constant';
import {SERVER_PATH} from '../Common/links';
import { connect } from 'react-redux';

export function getProducts (dispatch) {
    axios.get(`${SERVER_PATH}/api/products`)
    .then(({data})=> {
        dispatch({
            type: cnst.RECEIVE_PRUDUCTS, 
            products: data || [] 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}
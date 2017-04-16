import axios from 'axios';
import * as cnst from '../Common/constant';
import {SERVER_PATH} from '../Common/links';
import { connect } from 'react-redux';

export function getInvoicesList (dispatch) {
    axios.get(`${SERVER_PATH}/api/invoices`)
    .then(({data})=> {
        dispatch({
            type: cnst.RECEIVE_INVOICES_LIST, 
            receiveInvoices: data.result || [] 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}
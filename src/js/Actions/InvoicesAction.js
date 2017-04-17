import axios from 'axios';
import * as cnst from '../Common/constant';
import {SERVER_PATH} from '../Common/links';
import { connect } from 'react-redux';

export function getInvoicesList (dispatch) {
    axios.get(`${SERVER_PATH}/api/invoices`)
    .then(({data})=> {
        dispatch({
            type: cnst.RECEIVE_INVOICES_LIST, 
            receiveInvoices: data || [] 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}

export function getInvoicesItems (dispatch,id) {
    axios.get(`${SERVER_PATH}/api/invoices/${id}/items`)
    .then(({data})=> {
        dispatch({
            type: cnst.RECEIVE_INVOICES_ITEMS, 
            receiveInvoicesItems: data || [] 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}

export function createNewInvoiceList (dispatch,params) {
    axios.post(`${SERVER_PATH}/api/invoices`, params)
    .then(({data})=> {
        dispatch({
            type: cnst.ADD_NEW_INVOICES, 
            receiveInvoices: [data] || [] 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}

export function createNewInvoice (dispatch,params) {
    axios.post(`${SERVER_PATH}/api/invoices/${params.invoice_id}/items`, params)
    .then(({data})=> {
        dispatch({
            type: cnst.ADD_NEW_INVOICE_ITEM, 
            invoice_item: data || {}
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}

export function updateInvoicesList(dispatch,params) {
    axios.put(`${SERVER_PATH}/api/invoices/${params.id}`, params)
    .then(({data})=> {
        dispatch({
            type: cnst.UPDATE_INVOICES_LIST, 
            invoice_list: data
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}

export function updateInvoice(dispatch,params) {
    axios.put(`${SERVER_PATH}/api/invoices/${params.invoice_id}/items/${params.id}`, params)
    .then(({data})=> {
        dispatch({
            type: cnst.UPDATE_INVOICE, 
            invoice: data || {} 
        })
    })
    .catch((error) =>{
        console.error(error);
    });
}
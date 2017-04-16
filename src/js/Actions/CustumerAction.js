import axios from 'axios';
import * as cnst from '../Common/constant';
import {SERVER_PATH} from '../Common/links';
import { connect } from 'react-redux';

export function getCustumerData (dispatch) {
    axios.get(`${SERVER_PATH}/api/custumer`)
    .then(({data})=> {
        console.log(data)
    })
    .catch((error) =>{
        console.error(error);
    });
}
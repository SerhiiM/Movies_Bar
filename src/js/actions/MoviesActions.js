import axios from 'axios';
import * as cnst from '../common/constants';
import {SERVER_PATH_V3} from '../common/links';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

function getNotification(error_message = ''){
    return {
        title: 'Server didn`t respond. Try again later',
        message: error_message,
        position: 'tr',
        autoDismiss: 0,       
    }
}

export function getPopularMovies (dispatch, page = 1) {
    const key = localStorage.getItem(cnst.PASS_KEY);
    dispatch({
        type: cnst.RESEIVE_PROGRESS_BAR, 
        progress_bar: {title:'Movies popular', progress:0} 
    })
    axios.get(`${SERVER_PATH_V3}/movie/popular?api_key=${key}&language=en-US&page=${page}`)
        .then(({data})=> {
            dispatch({
                type: cnst.RESEIVE_MOVIES, 
                params: data || {} 
            })
            dispatch({
                type: cnst.RESEIVE_PROGRESS_BAR, 
                progress_bar: {title:'Movies popular', progress:100} 
            })
        })
        .catch((error) => {
            const notification = getNotification(error.statusText)
            dispatch(Notifications.error(notification))
        });  
}

export function getUpcomingMovies (dispatch, page = 1) {
    const key = localStorage.getItem(cnst.PASS_KEY);
    dispatch({
        type: cnst.RESEIVE_PROGRESS_BAR, 
        progress_bar: {title:'Movies upcoming', progress:0} 
    })  
    axios.get(`${SERVER_PATH_V3}/movie/upcoming?api_key=${key}&language=en-US&page=${page}`)
        .then(({data})=> {
            dispatch({
                type: cnst.RESEIVE_MOVIES, 
                params: data || {} 
            })
            dispatch({
                type: cnst.RESEIVE_PROGRESS_BAR, 
                progress_bar: {title:'Movies upcoming', progress:100} 
            }) 
        })
        .catch((error) => {
            const notification = getNotification(error.statusText)
            dispatch(Notifications.error(notification))
        });  
}

export function getSearchMovies (dispatch, search, page = 1) {
    const key = localStorage.getItem(cnst.PASS_KEY);
    dispatch({
        type: cnst.RESEIVE_PROGRESS_BAR, 
        progress_bar: {title:'Movies search', progress:0} 
    })
    console.log(new Date)
    axios.get(`${SERVER_PATH_V3}/search/movie?api_key=${key}&language=en-US&page=${page}&query=${search}&include_adult=false`)
        .then(({data})=> {
            dispatch({
                type: cnst.RESEIVE_PROGRESS_BAR, 
                progress_bar: {title:'Movies search', progress:100} 
            }) 
            dispatch({
                type: cnst.RESEIVE_MOVIES, 
                params: data || {} 
            })
        })
        .catch((error) => {
            const notification = getNotification(error.statusText)
            dispatch(Notifications.error(notification))
        });  
}

export function getMovieDetail(dispatch, movie_id){
    const key = localStorage.getItem(cnst.PASS_KEY);
    dispatch({
        type: cnst.RESEIVE_PROGRESS_BAR, 
        progress_bar: {title:'Movie details', progress:0} 
    })
    axios.get(`${SERVER_PATH_V3}/movie/${movie_id}?api_key=${key}&language=en-US`)
        .then(({data})=> {
            dispatch({
                type: cnst.RESEIVE_MOVIE_DETAILS, 
                params: data || {} 
            })
            dispatch({
                type: cnst.RESEIVE_PROGRESS_BAR, 
                progress_bar: {title:'Movie details', progress:100} 
            })
            if(data.belongs_to_collection){
                getMovieCollection(dispatch,data.belongs_to_collection.id);
            }
        })
        .catch((error) => {
            const notification = getNotification(error.statusText)
            dispatch(Notifications.error(notification))
        });   
}

export function getMovieRecomendations(dispatch, movie_id){
    const key = localStorage.getItem(cnst.PASS_KEY);
    dispatch({
        type: cnst.RESEIVE_PROGRESS_BAR, 
        progress_bar: {title:'Movie recomendation', progress:0} 
    })
    axios.get(`${SERVER_PATH_V3}/movie/${movie_id}/recommendations?api_key=${key}&language=en-US`)
        .then(({data})=> {
            dispatch({
                type: cnst.RESEIVE_MOVIE_RECOMENDATION, 
                params: data || {} 
            })
            dispatch({
                type: cnst.RESEIVE_PROGRESS_BAR, 
                progress_bar: {title:'Movie recomendation', progress:100} 
            })
        })
        .catch((error) => {
            const notification = getNotification(error.statusText)
            dispatch(Notifications.error(notification))
        });  
}

export function getMovieCollection(dispatch,collection_id){
    const key = localStorage.getItem(cnst.PASS_KEY);
    dispatch({
        type: cnst.RESEIVE_PROGRESS_BAR, 
        progress_bar: {title:'Movie collection', progress:0} 
    })
    axios.get(`${SERVER_PATH_V3}/collection/${collection_id}?api_key=${key}&language=en-US`)
        .then(({data})=> {
            dispatch({
                type: cnst.RESEIVE_MOVIE_COLLECTION, 
                params: data || {} 
            })
            dispatch({
                type: cnst.RESEIVE_PROGRESS_BAR, 
                progress_bar: {title:'Movie collection', progress:100} 
            })
        })
        .catch((error) => {
            const notification = getNotification(error.statusText)
            dispatch(Notifications.error(notification))
        });  
}
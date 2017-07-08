import * as cnst from './common/constants';

export function onEnterLoginModule(params, replace, done){
    done();
}

export function onEnterLoading(params, replace, done){
    done();
}

export function onEnterAdmin(store, params, replace, done){
    const storage = store.getState();
    if(localStorage.getItem('auth') !== 'admin'){
        replace('/');
    }   
    if(storage.stations_types.length === 0){
        replace('loading');
    }
    done();
}

export function onEnterDealer(store, params, replace, done){
    const storage = store.getState();
    if(localStorage.getItem('auth') !== 'dealer'){
        replace('/');
    } 
    if(storage.stations_types.length === 0){
        replace('loading');
    }
    done();
}

export function onEnterPage(params, replace, done){
    localStorage.setItem("path", params.location.pathname);
    done();
}

import * as cnst from '../common/constants';

export function onEnterSignIn(params, replace, done){
    done();
}

export function onEnterMoviesList(params, replace, done){
    const key = localStorage.getItem(cnst.PASS_KEY);
    if(!key){
        replace('/');
    }
    done();
}

export function onEnterMovieDetails(params, replace, done){
    const key = localStorage.getItem(cnst.PASS_KEY);
    if(!key){
        replace('/');
    }
    done();
}
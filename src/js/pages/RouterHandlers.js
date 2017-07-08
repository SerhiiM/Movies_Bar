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
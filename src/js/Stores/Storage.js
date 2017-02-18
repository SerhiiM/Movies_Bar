import React from 'react';

export default class Storage {

    constructor() {
            this._site_info = '';
        }


    get site_info() {
        return this._site_info;
    }
    set site_info(value) {
        this._site_info = value;
    }

}

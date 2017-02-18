import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import * as cnst from '../Common/constant';
import Storage from './Storage';

class BaseStore extends EventEmitter {

    constructor() {
        super(Storage);
        this.storage = new Storage;
        dispatcher.register( action => {
            switch (action.type) {
                case cnst.TEST_ACTION:
                    this.emit(cnst.EVENT_TEST_ACTION);
                    break;
                case cnst.RESEIVE_INFO:
                    this.storage.site_info = action.site_info;
                    this.emit(cnst.EVENT_RESEIVE_INFO);
                    break;    
                }
            }
        );
    }

    getInfo = () =>{
        return this.storage.site_info
    }

    addChangeListener(cnst,callback) {
        this.on(cnst,callback);
    }

    removeChangeListener(cnst,callback) {
        this.removeListener(cnst,callback);
    }
}

export default new BaseStore();
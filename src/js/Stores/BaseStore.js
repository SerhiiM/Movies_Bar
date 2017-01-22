import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import * as cnst from '../Common/constant';

class BaseStore extends EventEmitter {

    constructor() {
        super();
        dispatcher.register( action => {
            switch (action.type) {
                case cnst.TEST_ACTION:
                    this.emit(cnst.EVENT_TEST_ACTION);
                    break;
                }
            }
        );
    }
    addChangeListener(cnst,callback) {
        this.on(cnst,callback);
    }

    removeChangeListener(cnst,callback) {
        this.removeListener(cnst,callback);
    }
}

export default new BaseStore();
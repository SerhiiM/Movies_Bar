import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class BaseStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = dispatcher.register( action => {
            switch (action.type) {
                case 'testAction':
                    this.emit('eventTestAction');
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
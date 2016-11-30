import { EventEmitter } from "events";

export default class BaseStore extends EventEmitter {
    handleActionsInternal(action) {
        console.log("action.type ", action.type);
        if (typeof this[action.type] === "function") {

            const event = this[action.type](action);
            if (event) {
                this.emit(event);
            }
        } else {
            console.warn("There is no [%s] method in store object", action.type);
        }
    }

    handleActions(action) {
        if (action && action.type) {
            this.handleActionsInternal(action);
        } else {
            console.error("incorrect action type: ", action.type);
        }
    }
}

const baseStore = new BaseStore;
dispatcher.register(baseStore.handleActions.bind(baseStore));

export default baseStore;

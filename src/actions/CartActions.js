var ADD_ITEM = 'ADD_ITEM';
var REMOVE_ITEM = 'REMOVE_ITEM';

function cartActions(dispatcher) {
    return {
        addItem(item) {
            dispatcher.emit({
                actionType: ADD_ITEM,
                item: item
            })
        },

        removeItem(item) {
            dispatcher.emit({
                actionType: REMOVE_ITEM,
                item: item
            })
        }
    };
}

export {cartActions};

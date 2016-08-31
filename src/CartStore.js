import {EventEmitter} from './EventEmitter';

class CartStore extends EventEmitter {
    constructor() {
        super();
        this.cartItems = [];
    }

    addItem(catalogItem) {
        var items = this.cartItems.filter((i) => i.catalogItem == catalogItem);
        if (items.length == 0) {
            this.cartItems.push({qty: 1, catalogItem: catalogItem});
        } else {
            items[0].qty += 1;
        }
    }

    removeItem(cartItem) {
        var index = this.cartItems.indexOf(cartItem);
        this.cartItems.splice(index, 1);
    }

    emitChange() {
        this.emit('change');
    }
}

function cartStore(dispatcher) {
    var cartStore = new CartStore();

    dispatcher.addListener(function (action) {
        switch(action.actionType){
            case ADD_ITEM:
                cartStore.addItem(action.item);
                break;

            case REMOVE_ITEM:
                cartStore.removeItem(action.item);
                break;
        }
        cartStore.emitChange();
    });

    return {
        addListener: (l) => cartStore.addListener(l),
        cartItems: () => cartStore.cartItems
    };
}

const catalogItems = [
    {id: 1, title: 'Widget #1', cost: 1},
    {id: 2, title: 'Widget #2', cost: 2},
    {id: 3, title: 'Widget #3', cost: 3}
];

export {cartStore, catalogItems};


/*
angular.module('app')
    .factory('CartStore', CartStoreFactory.factoryMethod);

class CartStoreFactory {
    static factoryMethod(){
        return new CartStore();
    }
}

class CartStore {
    constructor(Dispatcher, Actions) {
        this.event = new EventEmitter();
        this.cartItems = [];

        //mutate state API
        this.dispatchToken = Dispatcher.register(function (action) {
            switch (action.type) {
                case Actions.CART_ADD_ITEM:
                    this.addItem(action.data);
                    //notify change
                    this.event.emit('change');
                    break;

                case Actions.CART_REMOVE_ITEM:
                    this.removeItem(action.data);
                    //notify change
                    this.event.emit('change');
                    break;
            }
        });

        //Read only API
        return {
            getItems: getItems,
            event: event,
            dispatchToken: dispatchToken
        };

        //helper functions
    }

    getItems() {
        return cartItems;
    }

    static addItem(item) {
        var items = cartItems.filter(function (i) {
            return i.data.id == item.id;
        });
        if (items.length === 0) {
            cartItems.push({
                qty: 1,
                data: item
            });
        } else {
            items[0].qty += 1;
        }
    }

    removeItem(item) {
        var index = cartItems.indexOf(item);
        if (index >= 0) {
            cartItems.splice(index, 1);
        }
    }
}*/

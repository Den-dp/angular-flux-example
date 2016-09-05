import {module} from 'angular';
import {EventEmitter} from './EventEmitter';
import {CatalogController} from './CatalogController';
import {CartController} from './CartController';
import {cartActions} from './actions/CartActions';
import {cartStore, catalogItems} from './stores/CartStore';

module('cart', [])
    .controller('CatalogCtrl', CatalogController)
    .controller('CartCtrl', CartController)
    .service('dispatcher', EventEmitter)
    .factory('cartActions', cartActions)
    .factory('cartStore', cartStore)
    .value('catalogItems', catalogItems);




// .controller('MainController', MainController)

/*class MainController {

    constructor($scope, CartActions, CartStore) {
        this.CartActions = CartActions;
        this.CartStore = CartStore;

        this.catalogItems = [
            {id: 1, title: 'foo', cost: 100},
            {id: 2, title: 'bar', cost: 200},
            {id: 3, title: 'baz', cost: 322}
        ];

        this.cartItems = [];

        CartStore.event.on('change', this.cartUpdated);

        $scope.$on('$destroy', function(){
            CartStore.event.removeListener(this.cartUpdated);
        });
    }

    addItem(item){
        this.CartActions.addItem(angular.copy(item));
    }

    removeItem(item){
        this.CartActions.removeItem(item);
    }

    cartUpdated(){
        this.cartItems = CartStore.getItems();
        this.total = this.cartItems.reduce((last, item) =>
            last + item.qty * item.data.cost,
        0);
    }
}*/

class CatalogController {
    constructor(catalogItems, cartActions) {
        this.cartActions = cartActions;
        this.catalogItems = catalogItems;
    }

    addToCart(catalogItem) {
        this.cartActions.addItem(catalogItem);
    }
}

export {CatalogController};
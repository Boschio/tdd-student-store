const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/errors")

class Store {

    static async listProducts() {
        const products = storage.get("products")
        return products
    }

    static async fetchProductById(productId) {
        const product = storage
            .get("products")
            .find({ id: Number(productId) })
            .value()
            console.log("SUCCESS")
        return product
    }

    static async createPurchase(purchase) {
        // if (!purchase.id) {
        //     throw new BadRequestError("Purchase order")
        // }

        const purchasedAt = new Date().toISOString()
        const newPurchase = { ...purchase, purchasedAt }

        storage.get("purchases").push(newPurchase).write()
        
        return newPurchase
    }

    static async listPurchases() {
        const purchases = storage.get("purchases")
        return purchases
    }


}

module.exports = Store
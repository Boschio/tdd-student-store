const { storage } = require("../data/storage")
const { BadRequestError } = require("../utils/errors")

class Store {

    static async listProducts() {
        const products = storage.get("products")
        return products
    }

    static fetchProductById(productId) {
        const product = storage
            .get("products")
            .find({ id: Number(productId) })
            .value()
            console.log("SUCCESS")
        return product
    }

    static async createPurchase(purchase) {
        if (!purchase) {
            throw new BadRequestError("Purchase order")
        }

        const createdAt = new Date().toISOString()
        const id = storage.get("purchases").value().length+1

        const products = storage.get("products")
        let total = 0
        purchase.shoppingCart.forEach(cartItem => {
            let matchingProd = this.fetchProductById(cartItem.itemId)
            console.log("MATCHING?", matchingProd)
          total += (matchingProd.price * cartItem.quantity)
        })
        total *= 1.0875

        const newPurchase = { id, ...purchase.user, order: purchase.shoppingCart, total: total.toFixed(2) , createdAt }

        console.log("PURCHASE INFO", newPurchase)

        storage.get("purchases").push(newPurchase).write()
        
        return newPurchase
    }

    static async listPurchases() {
        const purchases = storage.get("purchases")
        return purchases
    }


}

module.exports = Store
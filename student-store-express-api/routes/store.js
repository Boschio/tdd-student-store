const express = require("express")
const Store = require("../models/store")
const { NotFoundError, BadRequestError } = require("../utils/errors")
const router = express.Router()

router.use(express.json())

router.get('/store', async (req, res, next) => {
    try {
        const products = await Store.listProducts()
        res.status(200).json({ "products": products })
    } catch {(err)
        next(err)
    }
})

router.get('/store/:productId', async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.fetchProductById(productId)
        if(!product) {
            throw new NotFoundError("No product found")
        }
        res.status(200).json({ "products" : product })
    } catch {(err)
        next(err)
    }
})

router.post('/store', async (req, res, next) => {
    try {
        const newPurchase = req.body.purchases
        if(!newPurchase) {
            return next(new BadRequestError("No order found in request"))
        }
        const purchase = await Store.createPurchase(newPurchase)
        res.status(201).json({purchase})
    } catch(err) {
        next(err)
    }
})

// router.get('/store/purchases', async (req, res, next) => {
//     try {
//         const purchases = await Store.listPurchases()
//         res.status(200).json({ "purchases": purchases })
//     } catch {(err)
//         next(err)
//     }
// })

module.exports = router
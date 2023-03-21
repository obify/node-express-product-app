const mongoose = require('mongoose');
const ProductModel = mongoose.model("ProductModel");

exports.create_product = (req, res) => {
    const { name, quantity, amount } = req.body;
    const productModel = new ProductModel({
        productName: name,
        quantity: quantity,
        perQtyPrice: amount
    });

    productModel.save()
        .then((savedProduct) => {
            res.status(201).json({ "createdProduct": savedProduct })
        })
        .catch(function (err) {
            return res.status(500).json({ error: "Some error occured while saving product!" });
        });
};

exports.get_allproducts = (req, res) => {
    ProductModel.find()
        .then((products => {
            res.status(200).json({ productList: products })
        }))
        .catch((error) => {
            console.log(error)
        })
};
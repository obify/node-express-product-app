const express = require('express');
const app = express();
const productRouter = express.Router();

const product_controller = require("../controllers/product_controller");

productRouter.post('/createproduct', product_controller.create_product);
productRouter.get("/allproducts", product_controller.get_allproducts);

module.exports = productRouter;
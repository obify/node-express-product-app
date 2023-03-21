const mongoose = require('mongoose');
const SchemaTypes = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: SchemaTypes.Number,
        required: true
    },
    perQtyPrice: {
        type: SchemaTypes.Decimal128,
        required: true
    }
});

mongoose.model("ProductModel", productSchema);
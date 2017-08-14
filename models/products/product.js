var mongoose = require("mongoose");
var random = require("mongoose-random");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/store3");
var productSchema = new Schema({
	productTitle: {type:String, required: true},
	productDescription: {type: String, required: true},
	productCategoryName: {type: String, required: true},
	productImage: {type: String, required: true},
	productPuplisher: {type:String, required: true},
	productDate: {type: Date, required: true},
	productPrice: {type: String, required: true},
	productCount: {type: Number, required: true}

});
var Product = module.exports = mongoose.model("Product", productSchema, "products");

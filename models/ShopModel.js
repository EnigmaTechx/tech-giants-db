import mongoose from "mongoose";

const uri =
  "mongodb+srv://tech_giant:12345@cluster0.qxyxmsa.mongodb.net/TechGiantDB?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("****** Connected to MongoDB Sucessfully !!! ******");
  })
  .catch((err) => {
    console.log(`Not Connected to MongoDB due to error:\n  ${err}}`);
  });

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
});

const orderItemsSchema = new mongoose.Schema({
  quantity: Number,
  total_price: Number,
  order_header_id: Number,
  product_id: Number,
});

const orderHeaderSchema = new mongoose.Schema({
  order_date: Date,
  customer_id: Number,
  status: Number,
});

const customerSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  identification: String,
  address: String,
  city: String,
  country: String,
  zip_code: String,
  birth_date: Date,
  email: String,
  phone: Number,
});

const productModel = mongoose.model("product", productSchema);
const orderItemsModel = mongoose.model("order_item", orderItemsSchema);
const orderHeaderModel = mongoose.model("order_header", orderHeaderSchema);
const customerModel = mongoose.model("customer", customerSchema);

export { productModel, orderItemsModel, orderHeaderModel, customerModel };

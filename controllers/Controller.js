import {
  productModel,
  orderItemsModel,
  orderHeaderModel,
  customerModel,
} from "../models/ShopModel.js";

class Controller {
  static home_get = (req, res) => {
    res.render("home");
  };

  static add_item_get = (req, res) => {
    res.render("add_item");
  };

  static edit_item_get = (req, res) => {
    res.render("edit_item");
  };
  static report_get = (req, res) => {
    res.render("report");
  };
}

export default Controller;

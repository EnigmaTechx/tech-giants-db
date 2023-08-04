import express from "express";
import Controller from "../controllers/Controller.js";

const router = express.Router();

router.get("/home", Controller.home_get);
router.get("/add_item", Controller.add_item_get);
router.get("/edit_item", Controller.edit_item_get);
router.get("/report", Controller.report_get);

export default router;

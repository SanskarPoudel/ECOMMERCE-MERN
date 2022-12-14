const router = require("express").Router();
const productController = require("../controllers/productController");
router.get("/products", productController.product_get);

router.post("/products", productController.product_post);

module.exports = router;

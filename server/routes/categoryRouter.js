const {
  categories_post,
  categories_get,
} = require("../controllers/categoriesController");

const router = require("express").Router();

router.get("/categories", categories_get);

router.post("/categories", categories_post);

module.exports = router;

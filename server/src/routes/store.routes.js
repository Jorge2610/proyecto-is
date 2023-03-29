const { Router } = require("express");
const pool = require("../db");
const router = Router();
const {
  getAllCategories,
  getACategorie,
  createACategorie,
  deleteACategorie,
  updateACategorie,
  getAllProductsLotes,
  createProduct,
  createLot,
  deleteProduct,
  updateProduct,
} = require("../controllers/store.controllers");

//Ruta por defecto raiz.
router.get("/", (req, res) => {
  res.send("Hello World");
});

//Devuelve todas las categorias
router.get("/store/categories", getAllCategories);

//Devuelve una categoria en base al id. Esta en construccion
router.get("/store/categories/1", getACategorie);

//Creamos una categoria
router.post("/store/categories/create", createACategorie);

//Borramos una categoria
router.delete("/store/categories/delete", deleteACategorie);

//Actualizamos una categoria
router.put("/store/categories/update", updateACategorie);

//Devuelve todos los productos
router.get("/store/products", getAllProductsLotes);
//Devuelve un producto
//router.get('/store/products/1', getProduct)
//Creamos un producto
router.post("/store/products/create", createProduct);
//creamos un lote
router.post("/store/products/createLot", createLot);
//Borramos un producto
router.delete("/store/products/delete", deleteProduct);
//Actualizamos un producto
router.put("/store/products/update", updateProduct);

module.exports = router;

const { Router } = require("express");
const pool = require("../db");
const router = Router();
const {
  getAllCategories,
  getACategorie,
  createACategorie,
  deleteACategorie,
  updateACategorie,
  getAllProductsLots,
  getProduct,
  getLots,
  createProduct,
  createLot,
  deleteProduct,
  deleteLot,
  updateProduct,
  updateLote,
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
router.delete("/store/categories/delete/:id", deleteACategorie);

//Actualizamos una categoria
router.put("/store/categories/update/:id", updateACategorie);

//Devuelve todos los productos
router.get("/store/products", getAllProductsLots);
//Devuelve un producto
router.get('/store/products/:id', getProduct);
//devuelve todos los lotes
router.get('/store/products/lot/:id', getLots);
//Creamos un producto
router.post("/store/products", createProduct);
//creamos un lote
router.post("/store/products/lot/:id", createLot);
//Borramos un producto
router.delete("/store/products/:id/:nameProduct", deleteProduct);
//Borramos un lote
router.delete("/store/products/lot/:id", deleteLot);
//Actualizamos un producto
router.put("/store/products/:id", updateProduct);
//Actualizamos un lote
router.put("/store/products/lot/:idLote/:idProducto",updateLote);

module.exports = router;

const {Router} = require('express');
const pool = require('../db')
const router = Router();
const {getAllCategories, getACategorie, createACategorie, deleteACategorie, updateACategorie} = require('../controllers/store.controllers')
//Ruta por defecto raiz.
router.get('/', (req, res) => {
    res.send('Hello World'); 
})

//Devuelve todas las categorias
router.get('/store/categories', getAllCategories)

//Devuelve una categoria en base al id. Esta en construccion
router.get('/store/categories/1', getACategorie)

//Creamos una categoria
router.post('/store/categories/create', createACategorie)

//Borramos una categoria
router.delete('/store/categories/delete', deleteACategorie)

//Actualizamos una categoria
router.put('/store/categories/update', updateACategorie);


module.exports = router;
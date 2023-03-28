const {Router} = require('express');
const pool = require('../db')

const router = Router();

router.get('/store', async (req, res) => {
    const result = await pool.query('SELECT * FROM categorias')
    console.log(result)
    res.json('Exito') 
})

router.post('/store', (req, res) => {
    res.send('Creating something'); 
})

router.delete('/store', (req, res) => {
    res.send('Deleting something');
})

router.put('/store', (req, res) => {
    res.send('Updating something');
})

module.exports = router;
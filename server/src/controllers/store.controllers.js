const pool = require('../db')

const getAllCategories = async (req, res) =>{
    const result = await pool.query('SELECT * FROM categorias')
    console.log(result)
    res.json(result.rows) 
}

const getACategorie = async (req, res) =>{
    const result = await pool.query('SELECT * FROM categorias')
    console.log(result)
    res.json(result.rows[0]) 
}

const createACategorie = (req, res) =>{
    res.send('Creamos una categoria')    
}

const deleteACategorie = (req, res) =>{
    res.send('Borramos una categoria')    
}

const updateACategorie = (req, res) => {
    res.send('Actualizamos una categoria');
}

module.exports = {
    getAllCategories,
    getACategorie,
    createACategorie,
    deleteACategorie,
    updateACategorie
}       
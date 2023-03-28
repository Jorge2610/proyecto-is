const pool = require('../db')

const getAllCategories = async (req, res) => {
    const result = await pool.query('SELECT * FROM categorias')
    console.log(result)
    res.json(result.rows)
}

const getACategorie = async (req, res) => {
    const result = await pool.query('SELECT * FROM categorias')
    console.log(result)
    res.json(result.rows[0])
}

const createACategorie = async (req, res) => {
    const { name } = req.body

    try {
        const result = await pool.query('INSERT INTO categorias (nombre_categoria) VALUES ($1)', [name]);
        
        res.json(result.rows[0]);
    } catch (error) {
        console.log("El nombre de la categoria ya existe!")
        res.json({error: error.message});
    }
}

const deleteACategorie = (req, res) => {
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
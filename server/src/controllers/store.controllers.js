const pool = require("../db");

const getAllCategories = async (req, res) => {
  const result = await pool.query("SELECT * FROM categorias");
  console.log(result);
  res.json(result.rows);
};

const getACategorie = async (req, res) => {
  const result = await pool.query("SELECT * FROM categorias");
  console.log(result);
  res.json(result.rows[0]);
};

const createACategorie = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO categorias (nombre_categoria) VALUES ($1)",
      [name]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.log("El nombre de la categoria ya existe!");
    res.json({ error: error.message });
  }
};

const deleteACategorie = (req, res) => {
  res.send("Borramos una categoria");
};

const updateACategorie = (req, res) => {
  res.send("Actualizamos una categoria");
};
/*PRODUCTOS*/

const getAllProductsLotes = async (req, res) => {
  const result = await pool.query("SELECT * FROM productos,lotes");

  console.log(result);

  res.json(result.rows);
};

const createProduct = async (req, res) => {
  try {
    const { id_product, name_product, id_category, description_product } =
      req.body;
    const newProduct = await pool.query(
      "INSERT INTO productos (id_producto, nombre_producto, id_categoria, descripcion) VALUES($1, $2, $3, $4) RETURNING *",
      [id_product, name_product, id_category, description_product]
    );

    res.json(newProduct.rows[0]);
    //res.send("Creamos un producto");
  } catch (error) {
    console.log("El producto ya existe!");
    res.json({ error: error.message });
  }
};

const createLot = async (req, res) => {
  try {
    const {
      id_lot,
      id_product,
      quantity,
      unit_cost,
      unit_price,
      expiration_date,
    } = req.body;
    const newLot = await pool.query(
      "INSERT INTO lotes (id_lote, id_producto, cantidad, costo_unitario, precio_unitario, fecha_caducidad) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_lot, id_product, quantity, unit_cost, unit_price, expiration_date]
    );

    res.json(newLot.rows[0]);
    //res.send("Creamos un lote");
  } catch (error) {
    console.log("El lote del producto ya existe!");
    res.json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  
  const id = req.params.id;
  const nameProducto = req.params.nameProduct;
  pool.query('DELETE FROM lotes WHERE id_producto = $1', [id], (error, result1) => {
    if (error) {
      return res.status(500).send('Error eliminando lote: ' + error);
    }
    pool.query('DELETE FROM productos WHERE nombre_producto = $1', [nameProducto], (error, result2) => {
      if (error) {
        return res.status(500).send('Error eliminando de producto: ' + error);
      }
      return res.status(200).send(`Eliminados ${result1.rowCount} registros de lotes y ${result2.rowCount} registros de productos`);
    });
  }); 
  //  res.json(result.rows[0]);
 
};


const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
  const {name_product, id_category, description_product } = req.body;
  const newProduct = await pool.query(
    "UPDATE productos SET nombre_producto = $1, id_categoria = $2, descripcion = $3 WHERE id_producto = $4 RETURNING *",
    [name_product, id_category, description_product, id]
  );

  if (newProduct.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.json(newProduct.rows[0]);
  } catch (error) {
    console.log("Algo salio mal");
    res.json({ error: error.message });
  }
  
};

const updateLote = async (req, res) => {
  try {
    const {id} = req.params;
    const {
      quantity,
      unit_cost,
      unit_price,
      expiration_date
    } = req.body;
    const newProduct = await pool.query(
    "UPDATE lotes SET cantidad = $1, costo_unitario = $2, precio_unitario = $3, fecha_caducidad = $4 WHERE id_lote = $5 RETURNING *",
    [quantity, unit_cost, unit_price, expiration_date,id]
  );

  if (newProduct.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.json(newProduct.rows[0]);
  } catch (error) {
    console.log("Algo salio mal");
    res.json({ error: error.message });
  }
};



module.exports = {
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
  updateLote,
};

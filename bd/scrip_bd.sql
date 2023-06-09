CREATE TABLE categorias (
                id_categoria SERIAL PRIMARY KEY,
                nombre_categoria VARCHAR NOT NULL
);

CREATE TABLE productos (
                id_producto SERIAL PRIMARY KEY,
                nombre_producto VARCHAR NOT NULL,
                costo_unitario REAL NOT NULL,
                precio_unitario REAL NOT NULL,
                id_categoria INTEGER,
                descripcion VARCHAR
);

alter table productos
    add constraint fk_id_categoria
    foreign key (id_categoria) 
    REFERENCES categorias (id_categoria);

CREATE TABLE lotes (
                id_lote SERIAL PRIMARY KEY,
                id_producto INTEGER,
                cantidad INTEGER NOT NULL,                
                fecha_caducidad DATE
);

alter table lotes 
    add constraint fk_id_producto
    foreign key (id_producto) 
    REFERENCES productos (id_producto);
import { UploadOutlined } from '@ant-design/icons';
import {Button,DatePicker,Form,Input,Select,Upload,Modal} from 'antd';
import { useState } from 'react';
import moment from 'moment';
import ModalConf from '../Modals/ModalConfirmacion.js'
import './FormRegistroProducto.css'
const { TextArea } = Input;

//Lo usamos para guardar los valores de los inputs de los forms
const initialValues ={
  imagen: "",
  nombreProducto:"",
  cantidad:"",
  costoUnitario:"",
  precio:"",
  categoria:"",
  fechaCaducidad:"",
  descripcion:""
}


//Definimos el componente
const FormProductos = () => {
  //Como manejamos los estados de los Valores
  const [values,setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const{name,value} = e.target;
    setValues({...values,[name]:value});
    console.log(value);
  };

  //Probamos como Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //Devolvemos el Componente
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Crear Producto
      </Button>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 20,
              }}
              layout="vertical"
              disabled={false}
              style={{
                maxWidth: 600,
              }}
              className="form-producto"
            >

              <div className='botonx'>
                <Button >X</Button>
              </div>
              <p >Añadir Producto</p>

              <Form.Item
                label="Subir Imagen"
                valuePropName="fileList"
              >

                <Upload action="/upload.do" listType="picture"
                  accept="image/png, image/jpeg"
                  maxCount={1}
                  value={values.imagen}
                  onChange={handleInputChange}
                  name="imagen"
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>

                </Upload>
              </Form.Item>

              <Form.Item label="Nombre del Producto" className='labels' >
                <Input type='text' 
                      placeholder='Inserte nombre del Producto' 
                      className='controls' 
                      name="nombreProducto" 
                      value={values.nombreProducto} 
                      onChange={handleInputChange}
                      minLength='3'
                required />
              </Form.Item>
              <br></br>
              <p>{values.nombreProducto}</p>
    
              <br></br>

              <Form.Item label="Cantidad" className='labels'>
                <Input type="number" 
                      placeholder='Inserte cantidad' 
                      min='1' 
                      className='controls' 
                      name="cantidad" 
                      value={values.cantidad} 
                      onChange={handleInputChange}
                required />
              </Form.Item>
              <br></br>

              <Form.Item label="Costo Unitario" className='labels'>
                <Input type="number" 
                      placeholder='Inserte costo unitario' 
                      min='1.0' 
                      className='controls' 
                      name="costoUnitario" 
                      value={values.costoUnitario} 
                      onChange={handleInputChange}
                required />
              </Form.Item>
              <br></br>
              <Form.Item label="Precio" className='labels'>
                <Input type="number" 
                      className='controls' 
                      placeholder='Inserte el precio' 
                      min='0.0' 
                      name="precio" 
                      value={values.precio} 
                      onChange={handleInputChange}
                required />
              </Form.Item>

              <br></br>
              <Form.Item label="Seleccionar Categoria" className='categoria'>
                <Select placeholder='Seleccione la categoría'
                        name="categoria" 
                        value={values.categoria} 
                        onChange={handleInputChange}
                >
                  {/**Recuperar de la BD las categorias**/}

                </Select>
              </Form.Item>

              <Form.Item label="Fecha de Caducidad " className='labels'>
                <DatePicker className='controls' 
                            placeholder='Inserte la fecha'
                            disabledDate={(current) => {
                              return moment().add(-1, 'days') >= current;
                            }}
                            name="fechaCaducidad" 
                            value={values.fechaCaducidad} 
                            onChange={handleInputChange}
                />
              </Form.Item>

              <br></br>

              <Form.Item label="Descripcion" className='labels'>
                <TextArea rows={3} 
                          className='controls' 
                          name="costoUnitario" 
                          value={values.descripcion} 
                          onChange={handleInputChange}
                />
              </Form.Item>

              <br></br>
              <br></br>

              <Form.Item >
                <br></br>
                <br></br>

                <ModalConf/>
              </Form.Item>
            </Form>
      </Modal>
    </>
  );
};
export default () => <FormProductos />;
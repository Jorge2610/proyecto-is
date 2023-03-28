import './Form.css'
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

function getDatos(){
  console.log('El boton realiza algo');
}


const FormDisabledDemo = () => {
  return (
    <>
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
          <Button onClick={console.log(1)}>X</Button> 
        </div>
        <p >Añadir Producto</p> 

        <Form.Item 
              label="Subir Imagen" 
              valuePropName="fileList"
        >
          
            <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
            </Upload>
        </Form.Item>

        <Form.Item 
            label="Nombre del Producto" 
            className='labels' 
            validateStatus="error" 
            help="Should be combination of numbers & alphabets"
        >
            <Input htmlType='text' placeholder='Inserte nombre del Producto' className='controls' required/>
        </Form.Item>  
                <br></br>
          
        <Form.Item label="Cantidad" className='labels'>
          <Input htmlType="number" placeholder='Inserte cantidad' min='1' className='controls' required/>
        </Form.Item>
                <br></br>

        <Form.Item label="Costo Unitario" className='labels'> 
            <Input htmlType="number" placeholder='Inserte costo unitario' min='0.0' className='controls' required/>
        </Form.Item>
        <br></br>
        <Form.Item label="Precio" className='labels'>
          <Input htmlType="number" className='controls' placeholder='Inserte el precio' required/>
        </Form.Item>

        <br></br>
        <Form.Item label="Seleccionar Categoria" className='categoria'>
          <Select placeholder='Seleccione la categoría'>
            {/**Recuperar de la BD las categorias**/}
            
          </Select>
        </Form.Item>
      
        <Form.Item label="Fecha de Caducidad " className='labels'>
            <DatePicker className='controls' placeholder='Inserte la fecha'/>
        </Form.Item>
        
        <br></br>
        
        <Form.Item label="Descripcion" className='labels'>
            <TextArea rows={3} className='controls'/>
        </Form.Item>

        <br></br>
        <br></br>
        
        <Form.Item >
          <br></br>
          <br></br>
          
          <Button htmlType='submit'>Crear Producto</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
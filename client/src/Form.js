import './Form.css'
import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
} from 'antd';
import { useState } from 'react';
import moment from 'moment';
import ModalConf from './ModalConfirmacion.js'

const { RangePicker } = DatePicker;
const { TextArea } = Input;

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

          <Upload action="/upload.do" listType="picture"
            accept="image/png, image/jpeg"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>

          </Upload>
        </Form.Item>

        <Form.Item label="Nombre del Producto" className='labels' >
          <Input htmlType='text' placeholder='Inserte nombre del Producto' className='controls' required />
        </Form.Item>
        <br></br>

        <Form.Item label="Cantidad" className='labels'>
          <Input type="number" placeholder='Inserte cantidad' min='1' className='controls' required />
        </Form.Item>
        <br></br>

        <Form.Item label="Costo Unitario" className='labels'>
          <Input type="number" placeholder='Inserte costo unitario' min='1.0' className='controls' required />
        </Form.Item>
        <br></br>
        <Form.Item label="Precio" className='labels'>
          <Input type="number" className='controls' placeholder='Inserte el precio' min='0.0' required />
        </Form.Item>

        <br></br>
        <Form.Item label="Seleccionar Categoria" className='categoria'>
          <Select placeholder='Seleccione la categoría'>
            {/**Recuperar de la BD las categorias**/}

          </Select>
        </Form.Item>

        <Form.Item label="Fecha de Caducidad " className='labels'>
          <DatePicker className='controls' placeholder='Inserte la fecha'
            disabledDate={(current) => {
              return moment().add(-1, 'days') >= current;
            }}
          />
        </Form.Item>

        <br></br>

        <Form.Item label="Descripcion" className='labels'>
          <TextArea rows={3} className='controls' />
        </Form.Item>

        <br></br>
        <br></br>

        <Form.Item >
          <br></br>
          <br></br>

          <Button htmlType='submit' onclick={ModalConf.showModal}>Crear Producto</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
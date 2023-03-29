import { ShopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Menu.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
    getItem('Tienda J&B','tnd',null,[
        getItem('Inventario', 'g1',<ShopOutlined/>),
      ],'group')
    
];

const MenuDesplegable = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default MenuDesplegable;
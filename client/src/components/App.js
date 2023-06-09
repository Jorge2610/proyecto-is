import { Layout, Menu, ConfigProvider, theme } from 'antd';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ShopOutlined, HomeOutlined } from '@ant-design/icons';
import Home from '../Forms/Home';
import Inventario from '../Forms/ProductModal';

function App() {
    return (
        <ConfigProvider
            theme={{
                "token": {
                    "colorPrimary": "#fe9688",
                    "colorSuccess": "#b86fd6",
                    "colorWarning": "#ff9966",
                    "colorError": "#eb636b",
                    "colorInfo": "#77ddec",
                    "colorBgBase": "#ffeae6",
                    "colorTextQuaternary": "#000000",
                    "fontSize": 14,
                    "colorFill": "#fa8072"
                }
            }}
        >
            <AppLayout />
        </ConfigProvider>
    );
}

function AppLayout() {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SideMenu />
            <Content />
        </Layout>
    );
}

function SideMenu() {

    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const { Sider } = Layout;

    return (
        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu
                onClick={({ key }) => { navigate(key) }}
                items={[
                    { label: "Home", key: "/", icon: <HomeOutlined /> },
                    { label: "Inventario", key: "/inventario", icon: <ShopOutlined /> }
                ]}>
            </Menu>
        </Sider>
    );
}

function Content() {

    const { Header, Content, Footer } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return <Layout>
        <Header 
            style={{
                padding: 0,
                textAlign: 'center',
                background: colorBgContainer
            }}
        >
            TIENDA J&B
        </Header>

        <Content>
            <Routes>
                <Route path="/" element={<div><Home /></div>}></Route>
                <Route path="/inventario" element={<div><Inventario /></div>}></Route>
            </Routes>
        </Content>

        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Tienda J&B ©2023 Created by Team Lagartos
        </Footer>
    </Layout>;
}

export default App;
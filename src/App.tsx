import {Layout} from 'antd';
import {Content} from 'antd/lib/layout/layout';
import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";

function App() {

    return (
        <Layout>
            <Navbar/>
            <Content style={{background: '#222'}}>
                <AppRouter/>
            </Content>
        </Layout>
    );
}

export default App;

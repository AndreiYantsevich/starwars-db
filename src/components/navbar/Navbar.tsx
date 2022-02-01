import React from 'react';
import {Menu, Row} from "antd";
import {RouteNames} from "../../router";
import {Header} from "antd/lib/layout/layout";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Header>
            <Row justify='end'>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item key={1} onClick={() => navigate(RouteNames.MAIN)}>Home</Menu.Item>
                    <Menu.Item key={2} onClick={() => navigate(RouteNames.PEOPLE)}>People</Menu.Item>
                    <Menu.Item key={3} onClick={() => navigate(RouteNames.STARSHIPS)}>Starships</Menu.Item>
                    <Menu.Item key={4} onClick={() => navigate(RouteNames.PLANETS)}>Planets</Menu.Item>
                </Menu>
            </Row>
        </Header>
    );
};

export default Navbar;
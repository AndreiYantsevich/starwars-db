import React from 'react';
import {Col, Layout, Row} from "antd";
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <Layout>
            <Row className={styles.container}>
                <Col span={24} className={styles.column}>
                    <div className={styles.content}>
                        44434
                    </div>
                </Col>
            </Row>
        </Layout>

    );
};

export default MainPage;
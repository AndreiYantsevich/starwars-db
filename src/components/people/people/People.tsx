import React, {FC} from 'react';
import {IStarship} from "../../../store/reducers/types";
import {Card, Layout, Row} from "antd";

type PropsType = {
    name: string
    birth_year: string
    gender: string
    starships: Array<string> | IStarship[]
}

const People: FC<PropsType> = (props) => {
    return (
        <Layout>
            <Row justify='space-between' align='top'>
                <Card>{props.name}</Card>
                <Card>{props.gender}</Card>
            </Row>
        </Layout>
    );
};

export default People;
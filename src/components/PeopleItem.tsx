import React, {FC} from 'react';
import {IPeople} from "../store/reducers/types";
import Button from "./ui/button/Button";
import {useNavigate} from "react-router-dom";

type PropsType = {
    people: IPeople
}

const PeopleItem: FC<PropsType> = ({people}) => {
    const router = useNavigate()

    return (
        <div>
            <div>
                <strong>{people.name} {people.birth_year}</strong>
            </div>
            <Button onClick={() => router(`/people/${Math.random()}/`)}>Open</Button>
        </div>
    );
};

export default PeopleItem;
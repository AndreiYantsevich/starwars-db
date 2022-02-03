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
                <strong>{people.uid} {people.name}</strong>
            </div>
            <Button onClick={() => router(`/people/${people.uid}`)}>Open</Button>
        </div>
    );
};

export default PeopleItem;
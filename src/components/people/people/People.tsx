import React, {FC} from 'react';
import {IStarship} from "../../../store/reducers/types";

type PropsType = {
    name: string
    birth_year: string
    gender: string
    starships: Array<string> | IStarship[]
}

const People: FC<PropsType> = (props) => {
    return (
        <div>
            <div>
                <span>{props.name}</span>
                <span>{props.gender}</span>
            </div>
        </div>
    );
};

export default People;
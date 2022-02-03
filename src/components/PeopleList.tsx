import React, {FC} from 'react';
import {IPeople} from "../store/reducers/types";
import PeopleItem from "./PeopleItem";

type PropsType = {
    peoples: IPeople[]
    title: string
}

const PeopleList: FC<PropsType> = ({peoples, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {peoples.map((p) =>
                <PeopleItem key={p.name} people={p}/>
            )}
        </div>
    );
};

export default PeopleList;
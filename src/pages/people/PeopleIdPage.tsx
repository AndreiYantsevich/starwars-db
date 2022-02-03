import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {IPeople} from "../../store/reducers/types";

const PeopleIdPage = () => {
    const {id} = useParams()
    const people = useSelector<RootState, Array<IPeople>>(state => state.people.peoples)

    return (
        <div>
            <h1>You opened the people page with ID = {id}</h1>
            <div>{people[8].name}</div>
            <div>{people[8].gender}</div>
            <div>{people[8].skin_color}</div>
            <div>{people[8].height}</div>
            <div>{people[8].mass}</div>
            <div>{people[8].eye_color}</div>
        </div>
    );
};

export default PeopleIdPage;
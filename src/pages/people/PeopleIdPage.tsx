import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPeopleById} from "../../store/reducers/people-reducer";
import {RootState} from "../../store/store";
import {IPeople} from "../../store/reducers/types";

const PeopleIdPage = () => {
    const params = useParams()
    const people = useSelector<RootState, Array<IPeople>>(state => state.people)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPeopleById(params.id))
    }, [params.id])

    return (
        <div>
            <h1>You opened the people page with ID {params.id}</h1>
        </div>
    );
};

export default PeopleIdPage;
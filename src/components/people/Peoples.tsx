import React, {FC, useEffect} from 'react';
import {IPeople} from "../../store/reducers/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import People from "./people/People";
import {fetchAllPeople} from "../../store/reducers/people-reducer";


const Peoples: FC = () => {
    const peoples = useSelector<RootState, IPeople[]>(state => state.people)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllPeople())
    }, [])
    return (
        <div>
            {peoples.map(p =>
                <People
                    key={p.name}
                    name={p.name}
                    birth_year={p.birth_year}
                    gender={p.gender}
                    starships={p.starships}
                />)}
        </div>
    );
};

export default Peoples;
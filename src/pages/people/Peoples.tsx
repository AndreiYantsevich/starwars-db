import React, {FC, useEffect} from 'react';
import {IPeople} from "../../store/reducers/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import PeopleList from "../../components/PeopleList";
import {fetchAllPeople} from "../../store/reducers/people-reducer";


const Peoples: FC = () => {
    const peoples = useSelector<RootState, IPeople[]>(state => state.people.peoples)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllPeople())
    }, [])
    return (
        <div>
            <PeopleList peoples={peoples} title={'People list'}/>
        </div>
    );
};

export default Peoples;
import React, {FC, memo, useEffect} from 'react';
import {IPeople} from "../../store/reducers/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import PeopleList from "../../components/PeopleList";
import {fetchAllPeople} from "../../store/reducers/people-reducer";


const Peoples: FC = memo(() => {
    const peoples = useSelector<RootState, IPeople[]>(state => state.people)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllPeople())
    }, [dispatch])

    return (
        <div>
            <PeopleList peoples={peoples} title={'People list'}/>
        </div>
    );
});

export default Peoples;
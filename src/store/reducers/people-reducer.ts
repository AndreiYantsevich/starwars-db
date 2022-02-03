import {AppDispatch, ThunkType} from "../store";
import {StarwarsService} from "../../api/StarwarsService";
import {IPeople} from "./types";

enum PeopleActionsEnum {
    GET_ALL_PEOPLE = 'GET_ALL_PEOPLE',
    GET_PEOPLE_BY_ID = 'GET_PEOPLE_BY_ID'
}

type PeopleActions =
    ReturnType<typeof setAllPeople> |
    ReturnType<typeof setPeopleById>

type InitialStateType = typeof initialState

const initialState = {
    peoples: [] as Array<IPeople>
}


export const PeopleReducer = (state = initialState, action: PeopleActions): InitialStateType => {
    switch (action.type) {
        case PeopleActionsEnum.GET_ALL_PEOPLE:
            return {...state, peoples: action.peoples}
        case PeopleActionsEnum.GET_PEOPLE_BY_ID:
            return {
                ...state,
                peoples: state.peoples.filter(people => people === action.people)}
        default:
            return state
    }
}

export const setAllPeople = (peoples: Array<IPeople>) => ({type: PeopleActionsEnum.GET_ALL_PEOPLE, peoples} as const)
export const setPeopleById = (people: IPeople) => ({type: PeopleActionsEnum.GET_PEOPLE_BY_ID, people} as const)

export const fetchAllPeople = (): ThunkType => async (dispatch: AppDispatch) => {
    try {
       const res = await StarwarsService.getAllPeople()
        dispatch(setAllPeople(res.data.results))
    } catch (e) {
        console.log(e)
    }
}
export const fetchPeopleById = (id: number): ThunkType => async (dispatch: AppDispatch) => {
    try {
        const res = await StarwarsService.getPeopleById(id)
        dispatch(setPeopleById(res.data))
    } catch (e) {
        console.log(e)
    }
}
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

const initialState: Array<IPeople> = []


export const PeopleReducer = (state = initialState, action: PeopleActions): InitialStateType => {
    switch (action.type) {
        case PeopleActionsEnum.GET_ALL_PEOPLE:
            return action.peoples.map(p => ({
                ...p
            }))
        case PeopleActionsEnum.GET_PEOPLE_BY_ID:
            return [...state.filter(people => people.uid === action.id)]
        default:
            return state
    }
}

export const setAllPeople = (peoples: Array<IPeople>) => ({type: PeopleActionsEnum.GET_ALL_PEOPLE, peoples} as const)
export const setPeopleById = (id: string | undefined) => ({type: PeopleActionsEnum.GET_PEOPLE_BY_ID, id} as const)

export const fetchAllPeople = (): ThunkType => async (dispatch: AppDispatch) => {
    try {
       const res = await StarwarsService.getAllPeople()
        dispatch(setAllPeople(res.data.results))
    } catch (e) {
        console.log(e)
    }
}
export const fetchPeopleById = (id: string | undefined): ThunkType => async (dispatch: AppDispatch) => {
    try {
        const res = await StarwarsService.getPeopleById(id)
        dispatch(setPeopleById(res.data.result.uid))
    } catch (e) {
        console.log(e)
    }
}
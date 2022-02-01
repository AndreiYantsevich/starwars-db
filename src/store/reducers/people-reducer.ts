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
            return action.peoples.map(p => ({...p}))
        default:
            return state
    }
}

export const setAllPeople = (peoples: Array<IPeople>) => ({type: PeopleActionsEnum.GET_ALL_PEOPLE, peoples} as const)
export const setPeopleById = (id: number) => ({type: PeopleActionsEnum.GET_PEOPLE_BY_ID, id} as const)

export const fetchAllPeople = (): ThunkType => (dispatch: AppDispatch) => {
    StarwarsService.getAllPeople()
        .then((res) => {
            dispatch(setAllPeople(res.data.results))
        })
}
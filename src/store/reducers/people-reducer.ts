import {ThunkType} from "../store";

enum PeopleActionsEnum {
    GET_ALL_PEOPLE = 'GET_ALL_PEOPLE',
    GET_PEOPLE_BY_ID = 'GET_PEOPLE_BY_ID'
}

type PeopleState = {}
type PeopleActions =
    ReturnType<typeof setAllPeople> |
    ReturnType<typeof setPeopleById>

const initialState: PeopleState = {}

export const PeopleReducer = (state = initialState, action: PeopleActions): PeopleState => {
    switch (action.type) {
        default:
            return state
    }
}

export const setAllPeople = () => ({type: PeopleActionsEnum.GET_ALL_PEOPLE} as const)
export const setPeopleById = (id: number) => ({type: PeopleActionsEnum.GET_PEOPLE_BY_ID, id} as const)

export const fetchAllPeople = (): ThunkType => dispatch => {

}
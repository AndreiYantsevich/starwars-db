import {applyMiddleware, combineReducers, createStore} from "redux";
import {PeopleReducer} from "./reducers/people-reducer";
import {StarshipsReducer} from "./reducers/starships-reducer";
import {PlanetsReducer} from "./reducers/planets-reducer";
import thunk, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    people: PeopleReducer,
    starships: StarshipsReducer,
    planets: PlanetsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>
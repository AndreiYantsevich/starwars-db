type PlanetsState = {}
type PlanetsActions = any

const initialState: PlanetsState = {}

export const PlanetsReducer = (state = initialState, action: PlanetsActions): PlanetsState => {
    switch (action.type) {
        default:
            return state
    }
}
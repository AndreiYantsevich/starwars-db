
type StarshipsState = {}
type StarshipsActions = any

const initialState: StarshipsState = {}

export const StarshipsReducer = (state = initialState, action: StarshipsActions): StarshipsState => {
    switch (action.type) {
        default:
            return state
    }
}
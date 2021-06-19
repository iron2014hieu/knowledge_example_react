
export const types = {
    ADD: 'ADD',
    DELETE: "DELETE",
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT'
}
export const reducer = (state, action) => {
    switch (action.type) {
        case types.LOG_OUT:
            return {
                ...state,
                isLogged: false
            }
        case types.LOG_IN:
            return {
                ...state,
                isLogged: true
            }
        default:
            return state
    }
}

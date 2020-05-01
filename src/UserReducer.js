// REDUCER POUR FACILITER LA MANIPULATION DES STATES GLOBAUX DANS CONTEXT
export default (state, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                ...state,
                name: action.name,
            };
        case 'ADD_SURNAME':
            return {
                ...state,
                surname: action.surname
            };
        case 'ADD_GENDER':
            return {
                ...state,
                gender: action.gender
            };
        default: return state;
    }
}
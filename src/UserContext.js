import React, { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'

const initialState = { name: "", surname:"", gender:"" }
const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    const addName = (value) => {
        dispatch({type: 'ADD_NAME', name: value})
    }
    const addSurname = (value) => {
        dispatch({type: 'ADD_SURNAME', surname: value})
    }
    const addGender = (value) => {
        dispatch({type: 'ADD_GENDER', gender: value})
    }

    return(
        <UserContext.Provider value={{user: state, addName, addSurname, addGender}}>{ children }</UserContext.Provider>
    )
}


export const UserConsumer = UserContext.Consumer

export default UserContext
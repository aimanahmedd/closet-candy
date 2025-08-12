import { createContext, useReducer, useEffect } from "react";

const ClothesContext = createContext()
export default ClothesContext;

export const clothesReducer = (state, action) => {
    switch(action.type){
        case 'SET_CLOTHES':
            return {
                clothes: action.payload
            }
        case 'CREATE_CLOTHING':
            return{
                clothes: [action.payload, ...state.clothes]
            }
        default:
            return state
    }
}

export const ClothesContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(clothesReducer, {
        clothes: null
    })

    useEffect(() => {
        // Only run this once when component mounts
        dispatch({type: 'SET_CLOTHES', payload: []})
    }, [])

    return(
        <ClothesContext.Provider value={{...state, dispatch}}>
            { children }
        </ClothesContext.Provider>
    )
}
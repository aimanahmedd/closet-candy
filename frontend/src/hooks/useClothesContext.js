import {ClothesContext} from '../context/ClothingContext'
import {useContext} from 'react'

export const useClothesContext = () =>{
    const context = useContext(ClothesContext)

    if (!context){
        throw Error('useClothesContext must be used inside ClothesContextProvider')
    }

    return context // everytime we want to use clothing data invoke this hook and get context back
}
import { useContext } from 'react'
import ClothesContext from '../context/ClothingContext'

export const useClothesContext = () => {
    const context = useContext(ClothesContext)
    
    if (!context) {
        throw Error('useClothesContext must be used inside a ClothesContextProvider')
    }
    
    return context
}
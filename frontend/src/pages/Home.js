import { useEffect, useCallback } from "react"
import { useClothesContext } from '../hooks/useClothesContext'

//components
import ClothingDetails from '../components/ClothingDetails'
import ClothingForm from '../components/ClothingForm'

const Home = () => {
    const { clothes, dispatch } = useClothesContext()

    const fetchClothes = useCallback(async () => {
        const response = await fetch('/api/outfits')
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'SET_CLOTHES', payload: json})
        }
    }, [dispatch])

    useEffect(() => {
        fetchClothes()
    }, [fetchClothes])

    const handleClothingAdded = () => {
        fetchClothes() // Refresh the list after adding new item
    }

    return (
        <div className="home">
            <div className="clothes">
                {clothes && clothes.map((singleClothingItem) => (
                    <ClothingDetails key={singleClothingItem._id} singleClothingItem={singleClothingItem}/>
                ))}
            </div>
            <ClothingForm onClothingAdded={handleClothingAdded} />
        </div>
    )
}

export default Home
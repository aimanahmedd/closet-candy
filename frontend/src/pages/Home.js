import { useEffect, useState, useCallback } from "react"

//components
import ClothingDetails from '../components/ClothingDetails'
import ClothingForm from '../components/ClothingForm'

const Home = () => {
    const [clothes, setClothes] = useState(null)

    const fetchClothes = useCallback(async () => {
        const response = await fetch('/api/outfits')
        const json = await response.json()

        if(response.ok){
            setClothes(json)
        }
    }, [])

    useEffect(() => {
        fetchClothes()
    }, [fetchClothes]) //fires a function when component is rendered yippee!

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
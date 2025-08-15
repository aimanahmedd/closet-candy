import {useClothesContext} from '../hooks/useClothesContext'

const ClothingDetails = ({singleClothingItem})=>{
    const {dispatch} = useClothesContext()

    const handleClick = async () =>{

        console.log("Delete clicked for item:", singleClothingItem._id)
        const response = await fetch('http://localhost:4000/api/outfits/' +  singleClothingItem._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_CLOTHING', payload: json})
        }
    }

    return(
        <div className="clothing-details">
            <h4>{singleClothingItem.nameYay}</h4>
            <p><strong>Type:</strong> {singleClothingItem.typeOfItem}</p>
            <p><strong>Season:</strong> {singleClothingItem.season}</p>
            <p><strong>Size:</strong> {singleClothingItem.sizeNumber}</p>
   
            <p><strong>Image:</strong></p>
            {singleClothingItem.imageURL ? (
                <img 
                    src={singleClothingItem.imageURL} 
                    alt="Clothing item"
                    style={{
                        maxWidth: '95px',
                        maxHeight: '95px',
                    }}
                />
            ) : (
                <p> None</p>
            )}
            <p>{singleClothingItem.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ClothingDetails
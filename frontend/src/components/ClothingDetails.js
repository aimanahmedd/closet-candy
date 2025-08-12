const ClothingDetails = ({singleClothingItem})=>{
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
        </div>
    )
}

export default ClothingDetails
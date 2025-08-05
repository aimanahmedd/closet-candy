const ClothingDetails = ({singleClothingItem})=>{
    return(
        <div className="clothing-details">
            <h4>{singleClothingItem.nameYay}</h4>
            <p><strong>Type:</strong> {singleClothingItem.typeOfItem}</p>
            <p><strong>Season:</strong> {singleClothingItem.season}</p>
            <p><strong>Size:</strong> {singleClothingItem.sizeNumber}</p>
{singleClothingItem.imageURL && (
    <div>
        <strong>Image:</strong>
        <img 
            src={singleClothingItem.imageURL} 
            alt="Clothing item"
            style={{
                maxWidth: '95px',
                maxHeight: '95px',
            }}
        />
    </div>
)}
            <p>{singleClothingItem.createdAt}</p>
        </div>
    )
}

export default ClothingDetails
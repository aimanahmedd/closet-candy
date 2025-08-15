import { useState } from "react"

const ClothingForm = ({ onClothingAdded })=>{
    const [nameYay, setName] = useState('')
    const [typeOfItem, setType] = useState('')
    const [season, setSeason] = useState('')
    const [sizeNumber, setSize] = useState('')
   // const [imageURL, setImage] = useState('')
    const [error, setError] = useState(null)
    const[imagePreview, setImagePreview] = useState(null)
    const[emptyFields, setEmptyFields] = useState([])

    const handleImageChange = (e) =>{
        const file = e.target.files[0] 
    
    if (file) {
        const reader = new FileReader()
        
        reader.onload = (event) => {
            setImagePreview(event.target.result)
        }
        
        reader.readAsDataURL(file)
    }
    }

    const handleSubmit = async(e) =>{
    e.preventDefault()

    const singleClothingItem = {nameYay, typeOfItem, season, sizeNumber, imageURL: imagePreview}

    const response = await fetch('/api/outfits',{
        method: 'POST',
        body: JSON.stringify(singleClothingItem),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    const json = await response.json()

    if(!response.ok){
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }

    if(response.ok){
        setName('')
        setType('')
        setSeason('')
        setSize('')
        //setImage('')
        setError(null)
        setEmptyFields([])
        setImagePreview('')
        console.log("new clothing item added")
        // Trigger refresh of clothing list
        if (onClothingAdded) {
            onClothingAdded()
        }
    }
}

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new clothing item to your closet!</h3>

            <label>Clothing Name <em>- Required:</em></label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={nameYay}
                className = {emptyFields.includes('clothing name') ? 'error': ''}
            />

            <label>Clothing Type <em>- Required:</em></label>
            <input
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={typeOfItem}
                className = {emptyFields.includes('clothing type') ? 'error': ''}
            />

            <label>Clothing Season <em>- Required:</em></label>
            <input
                type="text"
                onChange={(e) => setSeason(e.target.value)}
                value={season}
                className = {emptyFields.includes('clothing season') ? 'error': ''}
            />

            <label>Clothing Size:</label>
            <input
                type="text"
                onChange={(e) => setSize(e.target.value)}
                value={sizeNumber}
            />

            <label>Clothing Image:</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />

            {imagePreview && (
    <div>
        <img 
            src={imagePreview} 
            alt="Preview" 
            style={{
                maxWidth: '200px',
                maxHeight: '200px',
                border: '2px solid #ccc',
                borderRadius: '8px',
                marginTop: '10px'
            }}
        />
    </div>
)}

        <button>Add clothing</button>
        {error && <div className="error">{error}</div>}
        </form>

    )
}

export default ClothingForm
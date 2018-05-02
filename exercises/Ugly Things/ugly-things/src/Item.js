import React from "react"
const Item = (props) => {
    const { title, imgUrl, discription, removeImage, index } = props
    return (
        <div className="item">
            <h1>{title}</h1>
             <p>{discription}</p>
            <img style={{ height: "200px", width: "300px" }} src={imgUrl} alt="" /><br />
            <button onClick={() => removeImage(index)}>X</button>
        </div>
    )
}
export default Item;
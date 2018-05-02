import React from "react"
import { connect } from "react-redux"
import Item from "./Item"
import { removeImage } from "./redux/Images.js"
function List(props) {
    const imageComponents = props.data.map((image, i) =>
        <Item key={image.imgUrl + i}{...image} removeImage={props.removeImage} index={i}> </Item>)
    return (
        <div>
            {imageComponents}
        </div>
    )
}
const mapStateToProps = state => {
    return state.images;
}
export default connect(mapStateToProps, { removeImage })(List)
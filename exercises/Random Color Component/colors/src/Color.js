import React from "react"


const Color = (props) => {
    console.log(props)
    const styles = {
        backgroundColor: props.color,
        border: "1px black solid",
        borderRadius: "15px",
        height: "600px",
        width: "600px"
    }
    return (
        <div>
            <div style={styles}></div>
        </div>
        
    )
}
export default Color
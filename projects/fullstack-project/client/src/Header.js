import React from 'react'

const Header = () => {
   
    return (
        <div className="header">

            <div style={{ marginRight: "20px" }}>
                <input style={{ width: "180px", marginRight: "10px" }} type="text, email" placeholder="Email or Name" />
                <input type="text" placeholder="Password" />
                <button style={{
                    marginLeft: "10px", height: "20px", color: "#fff", backgroundColor: "#4267b2",
                    borderColor: "#29487d", cursor:"pointer", onMouseEnter:"red"
                }} >Log in</button>
                <button style={{
                    marginLeft: "10px", height: "20px", color: "#fff", backgroundColor: "#4267b2",
                    borderColor: "#29487d", cursor:"pointer"
                }}>Sign up</button>
            <br />
            <a href="/" style={{ margin: "0", float: "right", color: "whitesmoke",textDecoration:"none" }}>Forgot account?</a>
        </div>
        </div >
    )
}
export default Header

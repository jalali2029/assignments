import React from 'react'

import {connect} from "react-redux" //connect is the parent of App component
import {start} from "../redux"
import {stop} from "../redux"
import {reset} from "../redux"



function App(props){
    return (
        <div className="app">

            <button onClick={props.start}>Start</button>
            <button onClick={props.stop}>Stop</button>
            <h1>{props.counter}</h1> 
            <button onClick={props.reset}>Reset</button>
           
          
        </div>
    )
}

function mapStateToProps (state){
    return {
        counter: state // counter takes the whole state from redux and the state value is 0 
                        //of you want to get a property it will be state.counter
    }
}
export default connect (mapStateToProps, {start, stop, reset})(App)


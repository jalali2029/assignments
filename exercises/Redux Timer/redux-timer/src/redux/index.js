import { createStore } from "redux"


export function start() {
    return {
        type: "START",
        now: new Date().getTime()
    }
}
export function stop() {
    return {
        type: "STOP",
        now: new Date().getTime()
    }
}
export function reset() {
    return {
        type: "RESET",
        now: new Date().getTime()
    }
}
function reducer(state = 0, action) {
    switch (action.type) {
        case "START":
            return state = 
                new Date().getTime() 
        case "STOP":
            return state 
        case "RESET":
            return state 
        default:
            return state
    }
}
export default createStore(reducer) //the export for store


// or we can export it as follow
// const store = createStore (reducer)
// export default store
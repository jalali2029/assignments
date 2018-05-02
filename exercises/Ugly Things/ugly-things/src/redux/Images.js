const initialState = {
    data: []
}
const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_IMAGE":
            return {
                data: [...state.data, action.image]
            }
        case "REMOVE_IMAGE":
            return {
                data: state.data.filter((image, i) => i !== action.index)
            }
        default:
            return state;
    }
}

export const addImage = image => {
    return {
        type: "ADD_IMAGE",
        image
    }
}
export const removeImage = index => {
    return {
        type: "REMOVE_IMAGE",
        index
    }
}
export default imageReducer
import { ADD_TYPE, FILE } from "../actions/types";

export const fileSystemReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TYPE: 
            return addType(...state, action.payload)
        default:
            return state;
    }
}


export const addType = (defaultData, newType) => {
    if(newType.type === FILE){
        console.log(newType + "A file")
    }else{
        console.log(newType + "A folder")
    }
}

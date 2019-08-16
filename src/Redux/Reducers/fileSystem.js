import { ADD_TYPE, FILE, FOLDER } from "../actions/types";
import generatedefaultFileSystem from "../../utils/defaultFiles";
import crypto from "crypto";

export const fileSystemReducer = (state = generatedefaultFileSystem, action) => {
    switch(action.type){
        case ADD_TYPE: 
            return createType(state, action.payload)
        default:
            return state;
    }
}


export const createType = (defaultData, newType) => {
    let num = 0;
    defaultData[newType.parentID].children.forEach(dataId => {
        if(defaultData[dataId].name.includes(newType.name) &&
        defaultData[dataId].type === newType.type){
            num++;
        }
        return num;
    })
    
    if(num > 0){
        if(newType.type === FILE){
            const tempFile = newType.name.split(".");
            if(tempFile.length > 1){
                tempFile[0] = `${tempFile[0]}_${num}`;
                newType.name = tempFile.join('.');
            }else {
                newType.name = `${newType.name}_${num}`;
              }
        }else{
            newType.name = `${newType.name}_${num}`;
        }
    }

    newType.path = newType.parentPath === "/" ? `${newType.parentPath}${newType.name}`
    : `${newType.parentPath}/${newType.name}`;

    if (newType.type === FOLDER) {
        newType.children = [];
    }

    const id = crypto.createHash('md5').update(newType.path + newType.type).digest("hex")
    defaultData[id] = newType;
    defaultData[newType.parentID].children.push(id);
    localStorage.setItem('fileSystem', JSON.stringify(defaultData));

    return {...defaultData}
}

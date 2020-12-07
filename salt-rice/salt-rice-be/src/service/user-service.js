//create
//getInfo
//flag
//delete

import {registerUserInDB, getUserInfoFromDB, getUserInfoByIdFromDB, flagUserInDB} from '../repo/user-repo'
import * as CryptoJS from 'crypto-js';

let registerUser = async (newUserJSON) => {
    
    newUserJSON.UUID = CryptoJS.SHA256(newUserJSON.NRIC).toString()
    
    delete newUserJSON.NRIC

    registerUserInDB(newUserJSON)
}

let getUserInfoByUsername = async (username) => {
    
    let UUID = CryptoJS.SHA256(username).toString()

    let userInfo = await getUserInfoFromDB(UUID)

    return userInfo
}

let getUserInfoByID = async (ID) => {
    
    let userInfo = await getUserInfoByIdFromDB(ID)

    return userInfo
}

let getUserInfoByUUID = async (UUID) => {
    
    let userInfo = await getUserInfoFromDB(UUID)

    return userInfo
}

let flagUser = async (ID) => {
    
    return await flagUserInDB(ID)
}
export {
    registerUser, getUserInfoByUsername, getUserInfoByID, getUserInfoByUUID, flagUser
}
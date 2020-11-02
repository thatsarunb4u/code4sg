//create
//getInfo
//flag
//delete

import {registerUserInDB, getUserInfoFromDB, getUserInfoByIdFromDB} from '../repo/user-repo'
import * as CryptoJS from 'crypto-js';

let registerUser = async (newUserJSON) => {
    
    newUserJSON.UUID = CryptoJS.SHA256(newUserJSON.NRIC).toString()
    
    delete newUserJSON.NRIC

    registerUserInDB(newUserJSON)
}

let getUserInfoByNRIC = async (NRIC) => {
    
    let UUID = CryptoJS.SHA256(NRIC).toString()

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
    
    newUserJSON.UUID = CryptoJS.SHA256(newUserJSON.NRIC).toString()
    
    delete newUserJSON.NRIC

    registerUser(newUserJSON)
}
export {
    registerUser, getUserInfoByNRIC, getUserInfoByID, getUserInfoByUUID, flagUser
}
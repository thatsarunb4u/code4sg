import {authenticateInDB,registerUserInDB} from '../repo/auth-repo'
import * as CryptoJS from 'crypto-js';

let registerUser = async (newUserJSON) => {
    
    newUserJSON.UUID = CryptoJS.SHA256(newUserJSON.username).toString()
    newUserJSON.password = CryptoJS.SHA256(newUserJSON.password).toString()
    
    delete newUserJSON.NRIC

    return await registerUserInDB(newUserJSON)
}

let authenticate = async (user) => {
    
    let username = CryptoJS.SHA256(user.username).toString()
    let password = CryptoJS.SHA256(user.password).toString()

    return await authenticateInDB({
        username: username,
        password: password
    })
}

export {
    registerUser, authenticate
}
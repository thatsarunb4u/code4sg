import {dbConnPool} from '../repo/db-client';
import {createTagInDBIfNotExists, searchTagInDB} from '../repo/tag-repo';


let createTagsIfNotExists = async (tagArr) => {
  
  return await createTagInDBIfNotExists(tagArr)
  
}

let searchTag = async (queryStr) => {
  return await searchTagInDB(queryStr)
}



export {
  createTagsIfNotExists, searchTag
}
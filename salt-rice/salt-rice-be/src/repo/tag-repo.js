import {dbConnPool} from './db-client'
import {getTagArrayFromJSON, getTagValuesFromJSON} from '../util/app-util'

let createTagInDBIfNotExists = async (tagArr) => {

  let tagArrObj = getTagValuesFromJSON(tagArr);

  console.log([tagArrObj])
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    //const sql = conn.format()
    const resp = await conn.query("INSERT INTO tag(tagName) WITH t(tagNameFromList) AS (VALUES "+tagArrObj+") SELECT t.tagNameFromList FROM t WHERE NOT EXISTS (SELECT 1 FROM tag WHERE tagName = t.tagNameFromList)");
    //console.log(resp.sql)
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}


let createPostTagInDB = async (postID, tagArr) => {

  let tagArrObj = getTagArrayFromJSON(tagArr);

  console.log([tagArrObj])
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    //const sql = conn.format()
    const resp = await conn.query("INSERT INTO posttag(postID, tagID) SELECT "+postID+", tagID FROM tag WHERE tagName IN ?",[tagArrObj]);
    //console.log(resp.sql)
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let searchTagInDB = async (inpText) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("SELECT tagID, tagName FROM tag WHERE tagName LIKE '%"+inpText+"%' AND isActive = TRUE");
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

export {
  createTagInDBIfNotExists, createPostTagInDB, searchTagInDB
} 
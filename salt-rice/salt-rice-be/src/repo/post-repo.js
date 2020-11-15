import {dbConnPool} from './db-client'

let searchPostsByTagInDB = async (inpText) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("SELECT p.*, t.tagID, t.tagName, COUNT(c.postID) as commentCount, u.nickname FROM tag t INNER JOIN posttag pt ON t.tagID = pt.tagID INNER JOIN post p ON pt.postID = p.postID left outer join user u ON p.authorID = u.userID LEFT OUTER JOIN comment c ON c.postID = p.postID WHERE t.tagName LIKE '%"+inpText+"%' AND t.isActive = TRUE AND p.isActive = TRUE AND p.isFlagged = FALSE GROUP BY p.postID");
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}


let searchPostsByTitleInDB = async (inpText) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("SELECT p.*, t.tagID, t.tagName, COUNT(c.postID) as commentCount, u.nickname FROM post p INNER JOIN posttag pt ON pt.postID = p.postID INNER JOIN tag t ON t.tagID = pt.tagID left outer join user u ON p.authorID = u.userID LEFT OUTER JOIN comment c ON c.postID = p.postID WHERE p.title LIKE '%"+inpText+"%' AND t.isActive = TRUE AND p.isActive = TRUE AND p.isFlagged = FALSE GROUP BY p.postID");
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}


let createPostInDB = async (inpObj) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("INSERT into post ( title, body, categoryID, authorID, isAnonymous) VALUES ( ?, ?, ?, ?, ?)", [inpObj['title'],inpObj['body'], inpObj['categoryID'], inpObj['authorID'], inpObj['isAnonymous']]);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}



export {
  searchPostsByTagInDB, searchPostsByTitleInDB, createPostInDB
}
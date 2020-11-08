import {dbConnPool} from './db-client'

let searchPostsByTagInDB = async (inpText) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("SELECT p.*, t.tagID, t.tagName FROM tag t INNER JOIN posttag pt ON t.tagID = pt.tagID INNER JOIN post p ON pt.postID = p.postID WHERE t.tagName LIKE '%"+inpText+"%' AND t.isActive = TRUE AND p.isActive = TRUE AND p.isFlagged = FALSE");
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
    const resp = await conn.query("SELECT p.*, t.tagID, t.tagName FROM post p INNER JOIN posttag pt ON pt.postID = p.postID INNER JOIN tag t ON t.tagID = pt.tagID WHERE p.title LIKE '%"+inpText+"%' AND t.isActive = TRUE AND p.isActive = TRUE AND p.isFlagged = FALSE");
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}



export {
  searchPostsByTagInDB, searchPostsByTitleInDB
}
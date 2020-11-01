//create
//search
//searchPostsByUserID
//getByPostID
//upvote
//downvote
//flag
//delete (for admin)
import {dbConnPool} from './db-client'

/* let createPost = async (newPostJSON) => {
  let conn;
  try {


    conn = await dbConnPool.getConnection();
    const result = await conn.query("INSERT INTO post (title, body, categoryID, authorID, ) VALUES (?)", postJSON);
    return result

  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
} */

let getByPostID = async (postID) => {
    let conn;
    try {
  
      conn = await dbConnPool.getConnection();
      const rows = await conn.query("SELECT * from post where id="+postID);
      return rows
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

export {
    getByPostID
}
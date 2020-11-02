//create
//search
//searchPostsByUserID
//getByPostID
//upvote
//downvote
//flag
//delete (for admin)
import {dbConnPool} from '../repo/db-client'

let searchPostsByUserID = async (userID) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("select * from post where authorID="+userID);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let create = async (input_json) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("INSERT into post (postID, title, body, categoryID, authorID, isAnonymous) VALUES (?, ?, ?, ?, ?, ?)", [input_json['postID'], input_json['title'],input_json['body'], input_json['categoryID'], input_json['authorID'], input_json['isAnonymous']]);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let upvote = async (postID) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const tmp = await conn.query("select upvote from post where postID="+postID);
    const current_counter = tmp[0].upvote;
    const resp = await conn.query("UPDATE post set upvote=? where postID=?", [current_counter+1, postID]);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let downvote = async (postID) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const tmp = await conn.query("select downvote from post where postID="+postID);
    const current_counter = tmp[0].downvote;
    const resp = await conn.query("UPDATE post set downvote=? where postID=?", [current_counter+1, postID]);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let flag = async (postID) => {
  let conn;
  try {
  
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("UPDATE post set isFlagged=1 where postID="+postID);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}


let getByPostID = async (postID) => {
    let conn;
    try {
  
      conn = await dbConnPool.getConnection();
      const rows = await conn.query("SELECT * from post where postID="+postID);
      return rows[0]
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

  let getPosts = async () => {
    let conn;
    try {
      conn = await dbConnPool.getConnection();
      const rows = await conn.query("SELECT * from post");
      return rows
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

  let deletePost = async (postID) => {
    let conn;
    try {
      conn = await dbConnPool.getConnection();
      const rows = await conn.query("DELETE from post where postID="+postID);
      return rows
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

export {
    getByPostID, create, searchPostsByUserID, upvote, downvote, deletePost, flag, getPosts
}
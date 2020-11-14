//create
//search
//delete
//flag

import {dbConnPool} from '../repo/db-client'

let createComment = async (input_json) => {
    let conn;
    try {
    
      conn = await dbConnPool.getConnection();
      const resp = await conn.query("INSERT into comment (commentID, body, postID, authorID, isAnonymous) VALUES (?, ?, ?, ?, ?)", [input_json['commentID'], input_json['body'], input_json['postID'], input_json['authorID'], input_json['isAnonymous']]);
      console.log(resp);
      return resp;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

  let searchComments = async (commentID) => {
    let conn;
    try {
    
      conn = await dbConnPool.getConnection();
      const resp = await conn.query("select * from comment where commentID="+commentID);
      console.log(resp);
      return resp;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

  let flagComment = async (commentID) => {
    let conn;
    try {
    
      conn = await dbConnPool.getConnection();
      const resp = await conn.query("UPDATE comment set isFlagged=1 where commentID="+commentID);
      console.log(resp);
      return resp;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

  let deleteComment = async (commentID) => {
    let conn;
    try {
      conn = await dbConnPool.getConnection();
      const rows = await conn.query("DELETE from comment where commentID="+commentID);
      return rows
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

  export {
      createComment, searchComments, flagComment, deleteComment
  }
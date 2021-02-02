//create
//search
//delete
//flag

import {dbConnPool} from '../repo/db-client'
import {updateScoreInDB} from '../repo/user-repo';

let createComment = async (input_json) => {
    let conn;
    try {

      conn = await dbConnPool.getConnection();
      const resp = await conn.query("INSERT into comment (body, postID, authorID, isAnonymous) VALUES ( ?, ?, ?, ?)", [ input_json['body'], input_json['postID'], input_json['authorID'], input_json['isAnonymous']]);
      console.log("Comment service:");
      console.log(resp);

      let updateScore = await updateScoreInDB(input_json['authorID'], 5)
      console.log(updateScore)

      return resp;
    } catch (err) {
      console.log(err)
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
      console.log(err)
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

let upvoteComment = async (commentID) => {
  let conn;
  try {
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("UPDATE comment SET upVote = upVote + 1 WHERE commentID = "+commentID);

    let commentObj = searchComments(req.params.commentId);
    await updateScoreInDB(commentObj.authorID, 1);


    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};

let downvoteComment = async (commentID) => {
  let conn;
  try {
    conn = await dbConnPool.getConnection();
    const resp = await conn.query("UPDATE comment SET downVote = downVote + 1 WHERE commentID = "+commentID);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
};

export {
  createComment, searchComments, flagComment, deleteComment,
  upvoteComment, downvoteComment
}

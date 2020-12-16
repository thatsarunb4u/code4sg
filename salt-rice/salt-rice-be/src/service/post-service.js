//create
//search
//searchPostsByUserID
//getByPostID
//upvote
//downvote
//flag
//delete (for admin)
import {dbConnPool} from '../repo/db-client';
import {searchPostsByTitleInDB, searchPostsByTagInDB, createPostInDB} from '../repo/post-repo';
import { createTagInDBIfNotExists, createPostTagInDB } from '../repo/tag-repo';


let searchPostsByTagOrTitle = async (queryString) => {
  let postsByTitleArr = await searchPostsByTitleInDB(queryString)
  let postsByTagArr = await searchPostsByTagInDB(queryString)

  let uniqueSet = new Set(postsByTitleArr.concat(postsByTagArr))
  return Array.from(uniqueSet)

}

let searchPostsByUserID = async (userID) => {
  let conn;
  try {

    conn = await dbConnPool.getConnection();
    const resp = await conn.query("SELECT *, COUNT(c.postID) from post p left outer join user u ON p.authorID = u.userID LEFT OUTER JOIN comment c ON c.postID = p.postID WHERE p.authorID="+userID+ " GROUP BY p.postID");
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let create = async (input_json) => {
  try {
    let createPostResponse = await createPostInDB(input_json)

    if (input_json.tags != undefined && input_json.tags.length > 0 ){
      let createTagResponse = await createTagInDBIfNotExists(input_json.tags)
      console.log(createTagResponse)
      let createPostTagResponse = await createPostTagInDB(createPostResponse.insertId, input_json.tags)
      console.log(createPostTagResponse)
    }


    return createPostResponse

  } catch (err) {
    throw err;
  } finally {

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
      const postRecords = await conn.query("SELECT * from post where postID="+postID);
      const commentRecords = await conn.query("SELECT c.*, u.nickname as authorNickname FROM comment c INNER JOIN user u ON c.authorID = u.userID WHERE c.postID="+postID);
      const tagRecords = await conn.query("SELECT t.* from posttag pt inner join tag t on pt.tagID = t.tagID where pt.postID="+postID);

      delete(commentRecords.meta)
      delete(tagRecords.meta)

      let postRecord = postRecords[0]
      postRecord.comments = commentRecords
      postRecord.tags = tagRecords

      return postRecord
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
  }

  let getPosts = async (page = 0, limit = 20) => {
    let conn;
    try {
      conn = await dbConnPool.getConnection();
      const rows = await conn.query(`
      SELECT
          p.*,
          COUNT(c.postID) as commentCount,
          u.nickname
      from
          post p
          left outer join user u ON p.authorID = u.userID
          LEFT OUTER JOIN comment c ON c.postID = p.postID
      GROUP BY
          p.postID
      LIMIT ${limit} OFFSET ${limit * page}
      `);
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

  let getTrendingPosts = async (page = 0, limit = 20) => {
    let conn;
    try {
      conn = await dbConnPool.getConnection();
      return await conn.query(`
      SELECT post.*, IFNULL(commentCount, 0) as commentCount, user.nickname
      FROM post
      LEFT OUTER JOIN (
          SELECT postID, COUNT(comment.commentID) as commentCount
          FROM comment
          GROUP BY comment.postID
      ) comment ON post.postID = comment.postID
      LEFT OUTER JOIN user ON post.authorID = user.userID
      ORDER BY (post.upVote - post.downVote) DESC, commentCount DESC
      LIMIT ${limit} OFFSET ${limit * page};
      `);
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  };

let getNeedsAdvicePosts = async (page = 0, limit = 20) => {
  let conn;
  try {
    console.log("needs advicep posts")
    conn = await dbConnPool.getConnection();
    return await conn.query(`
      SELECT post.*, user.nickname, IFNULL(commentCount, 0) as commentCount
      FROM post
      LEFT OUTER JOIN (
          SELECT *, COUNT(comment.commentID) as commentCount
          FROM comment
          GROUP BY comment.postID
      ) comment ON post.postID = comment.postID
      LEFT OUTER JOIN user ON post.authorID = user.userID
      WHERE commentCount IS NULL
      LIMIT ${limit} OFFSET ${limit * page};
    `);
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release();
  }
};

let getMostRecentPosts = async (page = 0, limit = 20) => {
  let conn;
  try {
    conn = await dbConnPool.getConnection();
    return await conn.query(`
    SELECT post.*, user.nickname, IFNULL(commentCount, 0) as commentCount
    FROM post
    LEFT OUTER JOIN (
        SELECT *, COUNT(comment.commentID) as commentCount
        FROM comment
        GROUP BY comment.postID
    ) comment ON post.postID = comment.postID
    LEFT OUTER JOIN user ON post.authorID = user.userID
    ORDER BY createdAt DESC
    LIMIT ${limit} OFFSET ${limit * page};
    `);
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release();
  }
};

export {
  searchPostsByTagOrTitle, getByPostID, create, searchPostsByUserID, upvote, downvote, deletePost, flag, getPosts,
  getTrendingPosts, getNeedsAdvicePosts, getMostRecentPosts
}

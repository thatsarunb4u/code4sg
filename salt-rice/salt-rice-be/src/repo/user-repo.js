import {dbConnPool} from './db-client'



let getUserInfoFromDB = async (UUID) => {
    let conn;
    try {
  
      console.log(UUID)
      conn = await dbConnPool.getConnection();
      const result = await conn.query(`SELECT userID, UUID, nickname, age, score, r.title AS rank, isActive, isBlacklisted, u.createdAt, u.updatedAt from user u LEFT OUTER JOIN reputation r ON u.score <= r.ceil AND u.score >= r.floor where UUID = '${UUID}'` );
      
      delete result.meta
      console.log(result[0])
      return result[0]
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
}

let getUserInfoByIdFromDB = async (ID) => {
    let conn;
    try {
  
      console.log(ID)
      conn = await dbConnPool.getConnection();
      const result = await conn.query("SELECT userID, UUID, nickname, age, score, r.title AS rank, isActive, isBlacklisted, u.createdAt, u.updatedAt from user u LEFT OUTER JOIN reputation r ON u.score <= r.ceil AND u.score >= r.floor where userID = "+ID );
      
      delete result.meta
      console.log(result[0])
      return result[0]
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
}

let flagUserInDB = async (ID) => {
  let conn;
  try {

    console.log(ID)
    conn = await dbConnPool.getConnection();
    const result = await conn.query("UPDATE user set isBlacklisted=1 where userID="+ID );
    return result

  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}
let updateScoreInDB = async (ID, score) => {
  let conn;

  try {

    console.log(ID)
    conn = await dbConnPool.getConnection();
    const result = await conn.query("UPDATE user set score= score+"+score+" where userID="+ID );
    await conn.query("UPDATE user SET rank = (case when score > 121 then 'Sage' when score > 41 then 'Mentor' when score >= 1 then 'Guide' end) WHERE userID="+ID );
    return result

  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

export {
    getUserInfoFromDB,getUserInfoByIdFromDB,flagUserInDB, updateScoreInDB
}
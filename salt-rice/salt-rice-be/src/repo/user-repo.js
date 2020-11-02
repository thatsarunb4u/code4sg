import {dbConnPool} from './db-client'

let registerUserInDB = async (newUserJSON) => {
    let conn;
    try {
  
      console.log(newUserJSON)
      conn = await dbConnPool.getConnection();
      const result = await conn.query("INSERT INTO user (UUID, nickname, age ) VALUES ('"+newUserJSON.UUID+"','"+ newUserJSON.nickname+"','"+newUserJSON.age+"')" );
      return result
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
}

let getUserInfoFromDB = async (UUID) => {
    let conn;
    try {
  
      console.log(UUID)
      conn = await dbConnPool.getConnection();
      const result = await conn.query(`SELECT userID, UUID, nickname, age, score, rank, isActive, isBlacklisted, createdAt, updatedAt from user where UUID = '${UUID}'` );
      
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
      const result = await conn.query("SELECT userID, UUID, nickname, age, score, rank, isActive, isBlacklisted, createdAt, updatedAt from user where userID = "+ID );
      
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

export {
    registerUserInDB, getUserInfoFromDB,getUserInfoByIdFromDB,flagUserInDB
}
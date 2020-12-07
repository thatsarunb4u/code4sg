import {dbConnPool} from './db-client'

let registerUserInDB = async (newUserJSON) => {
  let conn;
  try {

    console.log(newUserJSON)
    conn = await dbConnPool.getConnection();
    await conn.query("INSERT INTO user (UUID, password, nickname ) VALUES ('"+newUserJSON.UUID+"','"+ newUserJSON.password+"','"+ newUserJSON.nickname+"')" );
    const result = await conn.query(`SELECT userID, UUID, nickname, age, score, rank, isActive, isBlacklisted, createdAt, updatedAt from user where UUID = '${newUserJSON.UUID}'` );
    delete result.meta
    console.log(result[0])
    return result[0]
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let authenticateInDB = async (user) => {
    let conn;
    try {
  
      console.log(user)
      conn = await dbConnPool.getConnection();
      const result = await conn.query(`SELECT userID, UUID, nickname, age, score, rank, isActive, isBlacklisted, createdAt, updatedAt from user where UUID = '${user.username}' and password = '${user.password}'` );
      
      delete result.meta
      
      console.log(result[0])
      return result[0]
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release(); //release to pool
    }
}



export {
  authenticateInDB,registerUserInDB
}
import mariadb from "mariadb";
import {dbSettings} from "../config/app-config"

const dbConnPool = mariadb.createPool(dbSettings);

let testConnection = async () => {
  let conn;
  try {

    conn = await dbConnPool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    
    return rows

  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

let getTestRecords = async () => {
  let conn;
  try {

    conn = await dbConnPool.getConnection();
    const rows = await conn.query("SELECT * from test");
    return rows

  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

export {
  dbConnPool, testConnection, getTestRecords
}

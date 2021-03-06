import { dbConnPool } from './db-client';

let registerUserInDB = async (newUserJSON) => {
	let conn;
	try {
		console.log(newUserJSON);
		conn = await dbConnPool.getConnection();
		await conn.query(
			"INSERT INTO user (UUID, password, nickname ) VALUES ('" +
				newUserJSON.UUID +
				"','" +
				newUserJSON.password +
				"','" +
				newUserJSON.nickname +
				"')"
		);
		const result = await conn.query(
			`SELECT userID, UUID, nickname, age, score, rank, isActive, isBlacklisted, createdAt, updatedAt from user where UUID = '${newUserJSON.UUID}'`
		);
		delete result.meta;
		console.log(result[0]);
		return result[0];
	} catch (err) {
		throw err;
	} finally {
		if (conn) conn.release(); //release to pool
	}
};
let resetPasswordInDB = async (userID, password) => {
	let conn;
	try {
		
		conn = await dbConnPool.getConnection();
		const result = await conn.query('UPDATE user set password="' + password + '" where userID=' + userID);
		return result;
	} catch (err) {
		throw err;
	} finally {
		if (conn) conn.release(); //release to pool
	}
};
let authenticateInDB = async (user) => {
	let conn;
	try {
		console.log(user);
		conn = await dbConnPool.getConnection();
		const result = await conn.query(
			`SELECT userID, UUID, nickname, age, score, r.title AS rank, isActive, isBlacklisted, u.createdAt, u.updatedAt from user u LEFT OUTER JOIN reputation r ON u.score <= r.ceil AND u.score >= r.floor where UUID = '${user.username}' and password = '${user.password}'`
		);

		delete result.meta;

		console.log(result[0]);
		return result[0];
	} catch (err) {
		throw err;
	} finally {
		if (conn) conn.release(); //release to pool
	}
};

export { authenticateInDB, registerUserInDB, resetPasswordInDB };

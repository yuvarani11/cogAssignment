import { connection } from '../config/mysql'

/**
 * query call function
 */
export const commonQuery = async (query) => {
    return new Promise(async (resolve, reject) => {
        try {

            let result = await connection.query(query);
            resolve(result);
        } catch (e) {
            resolve(e)
        }
    })
}

/**
 * multi query function
 */
export const multiQuery = async (query, values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await connection.query(query, [values]);
            resolve(result);
        } catch (e) {
            resolve(e)
        }
    })
}
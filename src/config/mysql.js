

import mysql from 'promise-mysql'
import appConfig from '../config/app'
export let connection;
export const getMysqlConnection = () => {
    return new Promise(async (resolve, reject) => {
        mysql.createConnection(appConfig.mysql).then(function (conn) {
            connection = conn;
        }).then(function () {
            resolve(connection)
        }).catch(e => {
            reject(e)
        })
    })
}

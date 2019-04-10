import * as commonSer from '../service/common'
import * as util from '../utils/utilities'
import { QUERY } from '../constants/query'




/**
 * registerStudent
 */
export const getMultiStudentMappedToTeacher = (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = util.queryBuilder(QUERY.SELECT_MULTI_STUD_MAPPED_TEACH, request);
            let result = await commonSer.multiQuery(query, request.values);
            resolve(result);
        }
        catch (e) {
            if (e.isError)
                reject(e);
        }
    })
}

/**
 * registerStudent
 */
export const insertMultiStudTeachMapping = async (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await commonSer.multiQuery(QUERY.STUD_TEACH_MAP_MULTI_INSERT, request.values);
            resolve(result);
        }
        catch (e) {
            if (e.isError)
                return e;
            return meta.message.MSG_CUSTOM_ERROR(e);
        }
    })
}

/**
 * update Suspend For Student
 */
export const updateSuspendInStudent = (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = util.queryBuilder(QUERY.UPDATE_SUSPEND_STUDENT, request);
            let result = await commonSer.commonQuery(query);
            resolve(result);
        }
        catch (e) {
            if (e.isError)
                reject(e);
        }
    })
}

/**
* activeMultiStudents
*/
export const activeMultiStudent = (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await commonSer.multiQuery(QUERY.ACTIVE_MULTI_STUDENT, request.values);
            resolve(result);
        }
        catch (e) {
            if (e.isError)
                reject(e);
        }
    })
}

/**
* Get Common Students
*/
export const getCommonStudents = (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = util.queryBuilder(QUERY.COMMON_STUDENT, request);
            let result = await commonSer.multiQuery(query, request.values);
            resolve(result);
        }
        catch (e) {
            if (e.isError)
                reject(e);
        }
    })
}

/**
 * Active Student Mapped To Teacher
 */
export const getActiveStudentMappedToTeacher = (request) => {
    // export const getMultiStudentMappedToTeacher = async (request) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = util.queryBuilder(QUERY.SELECT_STUD_MAPPED_TEACHER, request);
            let result = await commonSer.commonQuery(query);
            resolve(result);
        }
        catch (e) {
            if (e.isError)
                reject(e);
        }
    })
}
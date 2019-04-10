import _ from 'underscore'
import * as MSG from '../messages/user'
import * as mysqlService from '../service/mysql'

/**
 * registerStudent
 */
export const registerStudent = async (request, h) => {
    const meta = request.pre.data.meta
    let response = {};
    let payload = request.payload;
    try {
        let mysqlReq = {
            teacher: payload.teacher,
            values: [payload.students]
        }
        let studAlreadyMapped = await mysqlService.getMultiStudentMappedToTeacher(mysqlReq);
        if (!studAlreadyMapped || !(studAlreadyMapped.length)) {
            mysqlReq = {
                values: []
            }
            _.each(payload.students, function (data) {
                mysqlReq.values.push([data, payload.teacher])
            })
            let newStudTeachMapping = await mysqlService.insertMultiStudTeachMapping(mysqlReq);
            if (newStudTeachMapping.errno == 1452) {
                return meta.messages.MSG_USER_NOT_FOUND;
            }
            else {
                return response;
            }
        }
        else {
            return response;
        }
    }
    catch (e) {
        if (e.isError)
            return e;
        return meta.message.MSG_CUSTOM_ERROR(e);
    }
}

/**
 * getCommonstudents
 */
export const getCommonstudents = async (request, h) => {
    const meta = request.pre.data.meta
    let response = {};
    let query = request.query;
    try {
        let mysqlReq = {};
        Array.isArray(query.teacher) ? mysqlReq.values = [query.teacher] : [];
        typeof query.teacher == "string" ? mysqlReq.values = [[query.teacher]] : [];
        mysqlReq.count = mysqlReq.values && mysqlReq.values[0] ? mysqlReq.values[0].length : 0
        let commonStud = mysqlReq.values ? await mysqlService.getCommonStudents(mysqlReq) : [];
        response.students = _.pluck(commonStud, "stud_mailid")
        return response;
    }
    catch (e) {
        if (e.isError)
            return e;
        return meta.message.MSG_CUSTOM_ERROR(e);
    }
}

/**
 * suspendStudent
 */
export const suspendStudent = async (request, h) => {
    const meta = request.pre.data.meta
    let response = {};
    let payload = request.payload;
    try {
        let updatedSuspend = await mysqlService.updateSuspendInStudent(payload);
        if (updatedSuspend.affectedRows) {
            return response;
        }
        else {
            return meta.messages.MSG_USER_NOT_FOUND;
        }
    }
    catch (e) {
        if (e.isError)
            return e;
        return meta.message.MSG_CUSTOM_ERROR(e);
    }
}

/**
 * retrieveForNotifications
 */
export const retrieveForNotifications = async (request, h) => {
    const meta = request.pre.data.meta
    let response = {};
    let payload = request.payload;
    try {
        let notiArray = payload.notification.split("@");
        let mentionedStudents = []
        for (let i = 1; i < notiArray.length;) {
            if (notiArray[i + 1]) {
                notiArray[i] = (notiArray[i].split(" ")[0]).trim();
                notiArray[i + 1] = (notiArray[i + 1].split(" ")[0]).trim();
                mentionedStudents.push(notiArray[i] + "@" + notiArray[i + 1]);
            }
            i = i + 2;
        }
        let studentsMappedToTeacher = await mysqlService.getActiveStudentMappedToTeacher({ teacher: payload.teacher });
        studentsMappedToTeacher = studentsMappedToTeacher ? _.pluck(studentsMappedToTeacher, "mail_id") : [];
        let activeMentionedStudents = await mysqlService.activeMultiStudent({ values: [mentionedStudents] });
        activeMentionedStudents = activeMentionedStudents ? _.pluck(activeMentionedStudents, "mail_id") : [];
        response.recipients = _.union(activeMentionedStudents, studentsMappedToTeacher)
        return response;
    }
    catch (e) {
        if (e.isError)
            return e;
        return meta.message.MSG_CUSTOM_ERROR(e);
    }
}

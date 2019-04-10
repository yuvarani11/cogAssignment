import joi from 'joi'
import * as common from './common'

export const registerStudentRequest = joi.object().keys({
    teacher: joi.string(),
    students: joi.array().items(joi.string())
});
export const registerStudentResponse = common.status;

export const getCommonstudentsRequest = joi.object().keys({
    teacher: joi.any()
});
export const getCommonstudentsResponse = common.status.keys({
    students: joi.array().items(joi.string())
});

export const suspendStudentRequest = joi.object().keys({
    student: joi.string()
});
export const suspendStudentResponse = common.status;

export const retrieveForNotificationsRequest = joi.object().keys({
    teacher: joi.string(),
    notification: joi.string(),
});
export const retrieveForNotificationsResponse = common.status.keys({
    recipients: joi.array().items(joi.string())
});


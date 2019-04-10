
import { generateCustomError, generateResponseObject } from '../utils/utilities'
/**
 * prepare response messages
 */

export const STUD_REGISTER = {
    MSG_SUCCESS: generateResponseObject(204, ''),
    MSG_USER_NOT_FOUND: generateResponseObject(404, 'User Not Found'),
    MSG_CUSTOM_ERROR: generateCustomError
}

export const COMMON_STUD = {
    MSG_SUCCESS: generateResponseObject(200, 'Success'),
    MSG_CUSTOM_ERROR: generateCustomError
}

export const STUD_SUSPEND = {
    MSG_SUCCESS: generateResponseObject(204, ''),
    MSG_USER_NOT_FOUND: generateResponseObject(404, 'User Not Found'),
    MSG_CUSTOM_ERROR: generateCustomError
}

export const RETRIEVE_FOR_NOTI = {
    MSG_SUCCESS: generateResponseObject(200, 'Success'),
    MSG_CUSTOM_ERROR: generateCustomError
}

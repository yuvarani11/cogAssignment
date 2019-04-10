import Boom from 'boom'
import crypto from 'crypto'

const saltRounds = 23;
/**
 * To build successs response status code and message
 * @param {*} successObj
 */
export const buildSuccessResponse = (successObj) => {
    let response = {
        statusCode: successObj.code,
    };
    successObj.message ? response.message = successObj.message : "";

    return response
}

/**
 * To build error response
 * @param {*} errorObj
 */
export const buildErrorResponse = (errorObj) => {
    if (errorObj.code < 400) {
        errorObj.code = 400
    }

    let error = new Boom(errorObj.message, { statusCode: errorObj.code });
    error.reformat();
    let obj = {
        statusCode: errorObj.code,
        message: errorObj.message
    };

    error.output.payload = obj;
    error.statusCode = errorObj.code;

    return error;
}

/**
 * To generate custom error message
 * @param {object} message
 */
export const generateCustomError = (message) => {
    return { code: 500, isError: true, message: message }
}

/**
 * To generate response object
 * @param {object} message
 */
export const generateResponseObject = (code, message) => {
    if (code === 200) {
        return { code: code, message: message }
    } else {
        return { code: code, isError: true, message: message }
    }
}

// /**
//  * generates random string of characters i.e salt
//  * @param {number} length - Length of the random string.
//  */
// export const genRandomString = (length) => {
//     if (!length)
//         length = 15

//     return crypto.randomBytes(Math.ceil(length / 2))
//         .toString('hex') /** convert to hexadecimal format */
//         .slice(0, length);
// }

// /**
//  * hash password with sha512.
//  * @param {string} password - List of required fields.
//  * @param {string} salt - Data to be validated.
//  */
// var sha512 = (password, salt) => {
//     if (!password)
//         password = ''

//     if (!salt)
//         salt = ''

//     const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
//     hash.update(password);
//     return hash.digest('hex');
// }

// /**
//  * To generate password hash.
//  * @param {string} plainTextPassword
//  * @param {string} salt - Optional. If it not it will create one
//  */
// export const generatePasswordHash = async (plainTextPassword, salt) => {
//     return new Promise(async (resolve, reject) => {
//         if (!salt)
//             salt = genRandomString(16)
//         const pwdHash = sha512(plainTextPassword, salt)
//         resolve({ salt: salt, pwd: pwdHash })
//     })
// }

// export const comparePasswordHash = (plainPassword, passwordHash, salt) => {
//     const compareHash = sha512(plainPassword, salt)
//     return passwordHash === compareHash
// }

// /**
//  * Generate Salt Password for original password
//  * @param password {string} Required
//  * @returns {*}
//  */
// export const generateSaltPassword = (password) => {
//     if (!password)
//         password = '';
//     let salt = crypto.createHash('sha1');
//     salt.update(password);
//     return salt.digest('hex');
// }


/**
 * It will build query by replacing key values from queryString with values in valueObject
 * @param queryString {string} Required
 * @param valueObject {object} Required
 * @returns {string}
 */
export const queryBuilder = (queryString, valueObject) => {

    let regex = /\$\w+/g;
    let resultArray = [];
    let resultString = queryString.replace(regex, function (matchString) {
        let matchValue = matchString.substring(1);
        let valueFromObject = valueObject[matchValue];
        if (valueFromObject == null) {
            resultArray.push(valueFromObject);
            return null;
        } else {
            return valueFromObject;
        }
    });
    if (resultString.match(regex)) {
        return null;
    } else {
        return resultString
    }
};

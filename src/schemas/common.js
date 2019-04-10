/**
 * Created by jaya on 28/09/17.
 */

import joi from 'joi'

export const status = joi.object().keys({
    statusCode: joi.number().integer().required(),
    message: joi.string()
}).label('Status');

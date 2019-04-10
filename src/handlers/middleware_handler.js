import * as _ from 'lodash'

import * as messages from '../messages'
import { buildErrorResponse, buildSuccessResponse } from '../utils/utilities'

/**
 * Middleware function to prepare the request object.
 * Including assigning methodId, response messages
 * @param {Object} req
 * @param {Object} h
 */
export const prepareRequest = (req, h) => {
    const methodId = req.route.settings.app.methodId
    let meta = {
        id: req.id,
        methodId: methodId,
        messages: messages[methodId]
    }

    return { meta: meta }
}

export const postHandler = (request, h) => {
    if (request.response.isBoom)
        return h.continue
    else if (_.get(request, 'pre.data.meta.methodId') && !_.get(request, 'response.headers.content-type')) {
        let res = JSON.parse(JSON.stringify(request.response.source))
        console.log(`in post handler : ${JSON.stringify(res)}`)
        let meta = request.pre.data.meta

        if (_.get(res, 'isError')) {
            console.log('in err res', res)
            const error = buildErrorResponse(res);
            throw error
        } else {
            let response = _.extend(res, buildSuccessResponse(meta.messages.MSG_SUCCESS))
            request.response.source = response
            response.statusCode ? request.response.statusCode = response.statusCode : ""
            return h.continue
        }
    } else
        return h.continue
}

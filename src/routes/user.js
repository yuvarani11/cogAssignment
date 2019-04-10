/**
 * File for handle the routes
 */
import * as schema from '../schemas/user'
import * as middlewareCtrl from '../handlers/middleware_handler'
import * as handler from '../handlers/user'
import { headerSchema } from '../schemas/common'


module.exports = [{
    method: 'POST',
    path: '/api/register',
    config: {
        auth: false,
        app: {
            methodId: 'STUD_REGISTER'
        },
        pre: [
            { method: middlewareCtrl.prepareRequest, assign: 'data' }
        ],
        handler: handler.registerStudent,
        description: 'Register Student',
        tags: ['api', 'api'],
        notes: [
            'Register Student'
        ],
        plugins: {
            'hapi-swagger': {
                responseMessages: [],
                validate: {}
            }
        },
        validate: {
            payload: schema.registerStudentRequest
        },
        response: {
            schema: schema.registerStudentResponse
        }
    }
},
{
    method: 'GET',
    path: '/api/commonstudents',
    config: {
        auth: false,
        app: {
            methodId: 'COMMON_STUD'
        },
        pre: [
            { method: middlewareCtrl.prepareRequest, assign: 'data' }
        ],
        handler: handler.getCommonstudents,
        description: 'Get Commonstudents',
        tags: ['api', 'api'],
        notes: [
            'Get Commonstudents'
        ],
        plugins: {
            'hapi-swagger': {
                responseMessages: [],
                validate: {}
            }
        },
        validate: {
            query: schema.getCommonstudentsRequest,
        },
        response: {
            schema: schema.getCommonstudentsResponse
        }
    }
},
{
    method: 'POST',
    path: '/api/suspend',
    config: {
        auth: false,
        app: {
            methodId: 'STUD_SUSPEND'
        },
        pre: [
            { method: middlewareCtrl.prepareRequest, assign: 'data' }
        ],
        handler: handler.suspendStudent,
        description: 'Suspend Student',
        tags: ['api', 'api'],
        notes: [
            'Suspend Student'
        ],
        plugins: {
            'hapi-swagger': {
                responseMessages: [],
                validate: {}
            }
        },
        validate: {
            payload: schema.suspendStudentRequest
        },
        response: {
            schema: schema.suspendStudentResponse
        }
    }
},
{
    method: 'POST',
    path: '/api/retrievefornotifications',
    config: {
        auth: false,
        app: {
            methodId: 'RETRIEVE_FOR_NOTI'
        },
        pre: [
            { method: middlewareCtrl.prepareRequest, assign: 'data' }
        ],
        handler: handler.retrieveForNotifications,
        description: 'Retrieve For Notifications',
        tags: ['api', 'api'],
        notes: [
            'Retrieve For Notifications'
        ],
        plugins: {
            'hapi-swagger': {
                responseMessages: [],
                validate: {}
            }
        },
        validate: {
            payload: schema.retrieveForNotificationsRequest
        },
        response: {
            schema: schema.retrieveForNotificationsResponse
        }
    }
}
]

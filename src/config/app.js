/**
 * Configuration for the application
 */

import * as pack from '../../package.json'

let app
export default app = {
    server: {
        port: 4000,
        host: "localhost",
        routes: {
            validate: { options: { stripUnknown: true } },
            response: { modify: true, options: { stripUnknown: true } }
        }
    },
    swaggerOptions: {
        info: {
            title: 'API Documentation',
            version: pack.version,
            description: 'Rest API Services'
        },
        host: process.env.PUBLIC_URL,
        basePath: '/',
        documentationPath: '/swagger',
        payloadType: 'json',
        grouping: 'tags'
    },
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'student_management'
    }
}


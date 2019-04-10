import * as Hapi from 'hapi'
import inert from 'inert'
import vision from 'vision'
import HapiSwagger from 'hapi-swagger'
import appConfig from './config/app'
import routes from './routes'
import { postHandler } from './handlers/middleware_handler'
import { getMysqlConnection } from './config/mysql'

/**
 * Create Hapi server and regiter plugin's and modules
 */

export async function main() {
    return new Promise(async (resolve, reject) => {
        try {
            await getMysqlConnection()
            let server = Hapi.server(appConfig.server)
            await server.register(inert)
            await server.register(vision)
            await server.register({
                plugin: HapiSwagger,
                options: appConfig.swaggerOptions
            })
            server.route(routes)

            server.ext('onPostHandler', postHandler)
            await server.start()
            resolve(server)
        } catch (e) {
            reject(e)
        }
    })
}

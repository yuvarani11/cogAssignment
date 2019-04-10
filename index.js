require('babel/register')
const dotenv = require('dotenv').config();
const app = require('./src/index')

app.main()
    .then((server) => {
        console.log(`Server is listening at : ${server.info.uri}`)
    }, (err) => {
        console.log('err');
        console.log(err)
    })
    .catch((e) => {
        console.log('exception');
        console.log(e.stack)
    })

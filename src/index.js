const express= require('express')
const app = express()

require('./database')

app.set('port',3000)

app.use(require('./routes/web.routes'))

app.listen(app.get('port'),()=>{
    console.log(`servidor corriendo en el puerto ${app.get('port')}`)
})
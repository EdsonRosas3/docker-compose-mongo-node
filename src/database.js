const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db=>console.log('DB is connet to', db.connection.host))
    .catch(error=>console.error(error))
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/usuario-db', {
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify: false 
})
.then(de => console.log('db in connect'))
.catch(error=> console.error(error));


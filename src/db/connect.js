const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/Apeiro', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        autoIndex: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4,
    })
    .then(() => {
        console.log(`Connected to database`);
    })
    .catch((e) => {
        console.log(`Error!`);
    });

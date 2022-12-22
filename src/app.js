const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

require('./db/connect');
const Register = require('./models/registers');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    try {
        console.log(req.body.firstname);
        res.send(req.body.firstname);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});

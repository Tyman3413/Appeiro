const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bcrypt = require('bcryptjs');
const app = express();

require('./db/connect');
const Register = require('./models/registers');
const { restart } = require('nodemon');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/main', (req, res) => {
    res.render('index');
});

app.get('/profile', (req, res) => {
    res.render('registered');
});

app.get('/car1', (req, res) => {
    res.render('car1');
});

app.get('/regcar1', (req, res) => {
    res.render('regcar1');
});

app.get('/car2', (req, res) => {
    res.render('car2');
});

app.get('/regcar2', (req, res) => {
    res.render('regcar2');
});

app.get('/car3', (req, res) => {
    res.render('car3');
});

app.get('/regcar3', (req, res) => {
    res.render('regcar3');
});

app.get('/car4', (req, res) => {
    res.render('car4');
});

app.get('/regcar4', (req, res) => {
    res.render('regcar4');
});

app.get('/car5', (req, res) => {
    res.render('car5');
});

app.get('/regcar5', (req, res) => {
    res.render('regcar5');
});

app.get('/car6', (req, res) => {
    res.render('car6');
});

app.get('/regcar6', (req, res) => {
    res.render('regcar6');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.post('/main', async (req, res) => {
    try {
        const registration_password = req.body.registration_password;
        const registration_confirm_password =
            req.body.registration_confirmPassword;
        const registration_hashpassword = await bcrypt.hash(
            registration_password,
            10
        );
        const registration_hash_confirm_password = await bcrypt.hash(
            registration_confirm_password,
            10
        );

        const registration_email = req.body.registration_email;
        const registartion_email_database = await Register.findOne({
            email: registration_email,
        });

        if (await Register.findOne({ email: registration_email })) {
            res.send('Такой пользователь уже зарегистрирован');
        } else {
            const registerUser = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.registration_email,
                password: registration_hashpassword,
                confirmPassword: registration_hash_confirm_password,
            });

            const registeredUser = await registerUser.save();
            res.status(201).render('registered');
        }
    } catch (error) {
        console.log(error);
        const login_email = req.body.login_email;
        const login_password = req.body.login_password;

        const login_user_email = await Register.findOne({ email: login_email });

        try {
            const login_password_match = await bcrypt.compare(
                login_password,
                login_user_email.password
            );

            if (login_password_match === true) {
                res.status(201).render('registered');
            } else {
                res.send('Пароль неверный');
            }
        } catch (error2) {
            res.status(400).send('Last error');
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});

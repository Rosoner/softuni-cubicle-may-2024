const express = require('express');
const handlebars = require('express-handlebars');
const expressConfig = require('./config/expressConfig');

const app = express();

const PORT = 5000;

// Handlebars config
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');
expressConfig(app);

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

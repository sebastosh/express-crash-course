const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger');
const members = require('./Members')


const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}))


// Bare minimum sendFile to browser
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// Members Api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server started on port ${PORT}`));

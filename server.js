const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./server/config/mongoose.config'); // This is new
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/users.routes')(app);
require('./server/routes/forums.routes')(app);
require('./server/routes/comments.routes')(app);
require('./server/routes/images.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});

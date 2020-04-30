const express = require ('express');
const cors = require ('cors');
const  mongoose = require ('mongoose');

require('dotenv').config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
   console.log("MongoDB database connection established successfully") ;
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const objectRouter = require('./routes/object.routes');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/objects', objectRouter);

app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
    console.log('Server is running');
});

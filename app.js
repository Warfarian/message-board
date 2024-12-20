const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, "views"));
app.set( "view engine", "ejs");

app.use('/new', newRouter);
app.use('/', indexRouter);


app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})
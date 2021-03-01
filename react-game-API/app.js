var express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

var statsRouter = require('./routes/stats');

var app = express();

mongoose.connect('mongodb+srv://game:tgbYHN123!@cluster0.b0q68.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/stats', statsRouter);

app.use((err, req, res, next) => {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Ready to Go!');
  console.log(process.env.PORT);
});

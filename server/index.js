const express = require('express');
const mongoose = require('mongoose');
const todosRouter = require('./routes/Todos');
const authRouter = require('./routes/Authentication');
const mongoConnect = require('./db');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



const port = 3000;

const mongoUri = '***REMOVED***?retryWrites=true&w=majority&appName=Cluster0';


app.use('/users', authRouter);
app.use('/todos', todosRouter);


// mongoConnect(client => {
//   console.log(client);
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });

mongoose.connect(mongoUri, {
  autoSelectFamily: false,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch(err => {
  console.log("❌ Connection error:", err);
});


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
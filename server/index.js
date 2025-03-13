const express = require('express');
const mongoose = require('mongoose');
const todosRouter = require('./routes/Todos');
const authRouter = require('./routes/Authentication');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



const port = 3000;

const mongoUri = '***REMOVED***?retryWrites=true&w=majority&appName=Cluster0';


app.use('/users', authRouter);
app.use('/todos', todosRouter);


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



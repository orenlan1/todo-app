const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const todosRouter = require('./routes/Todos');
const authRouter = require('./routes/Authentication');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;


const port = 3000;


mongoose.connect(mongoConnectionString, {
  autoSelectFamily: false,
})
.then(() => {
  console.log("✅ Connected to MongoDB");

  
  const mongoClient = mongoose.connection.getClient();


  const store = MongoStore.create({
    client: mongoClient, 
    collectionName: 'sessions',
  });

  
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: store,
      cookie: { 
        secure: false, // Set to true if using HTTPS
        httpOnly: true, 
        maxAge: 1000 * 60 * 60 // 1 hour
      }
    })
  );

  app.use('/users', authRouter);
  app.use('/todos', todosRouter);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch(err => {
  console.log("❌ Connection error:", err);
});



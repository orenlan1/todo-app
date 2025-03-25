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

  // Get the native MongoDB client from Mongoose
  const mongoClient = mongoose.connection.getClient();

  // Configure session store using the Mongoose client
  const store = MongoStore.create({
    client: mongoClient, // Pass the native MongoDB client
    collectionName: 'sessions',
  });

  // Set up session middleware
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



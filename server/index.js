const express = require('express');
const todosRouter = require('./routes/todos');
const authRouter = require('./routes/authentication');

const app = express();

const port = 3000;

app.use('/users', authRouter);
app.use('/todos', todosRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
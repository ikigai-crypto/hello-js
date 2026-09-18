require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT ;

app.use(express.json()); 


app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email)return res.status(400).json({ 
            error: 'Name and email are required'
         });
    res.send('Hello, ' + name );
});

app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});

app.get('/user/:id', (req, res) => {
    const  id  = req.params;
    res.send(id);
});

app.use((req, res) => {

    res.status(404).json({
        error: "Not Found",
        message: `Route ${req.method} ${req.originalUrl} not found`
    });

});

app.listen(PORT, () =>   {
  console.log(`Server is running on port  ${PORT}`);
});
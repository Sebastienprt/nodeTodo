const express = require("express");
const app = express();

app.get('/task', (req, res) => {

    res.send("Read all rows of task table");
})

app.get('/task/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Read the rows of task table with id = ${id} `);
})

app.post('/task', (req, res) => {
    res.send(`Created row in task table`);
})

app.put('/task/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Updated rows of task table with id = ${id} `);
})
app.patch('/task/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Soft delete id =  ${id} `);
})
app.delete('/task/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hard delete id = ${id} `);
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Serveur is running on port ${PORT}`)
})
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('automatic restart')
});

const users = [
    {id:0, name: 'Rehnuma', email:'rehnumatasnimbd@gmail.com', phone: '01738489333'},
    {id:1, name: 'Rehnuma', email:'rehnumatasnimbd@gmail.com', phone: '01738489333'},
    {id:2, name: 'Tasnim', email:'rehnumatasnimbd@gmail.com', phone: '01738489333'},
    {id:3, name: 'Aboni', email:'rehnumatasnimbd@gmail.com', phone: '01738489333'},
    {id:4, name: 'Upoma', email:'rehnumatasnimbd@gmail.com', phone: '01738489333'},
    {id:5, name: 'Rehtas', email:'rehnumatasnimbd@gmail.com', phone: '01738489333'},
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('inside post');
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruit', (req, res) => {
    res.send('harivanga, sagorvog, surjopuri')
})

app.get('/fruits/mango/harivanga', (req, res) => {
    res.send('yummy yummy taste!!!')
});

app.listen(port, () => {
    console.log('This is listening port', port)
});
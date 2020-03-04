var express =  require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())

app.listen(8000, () =>
  console.log(`Example app listening on port 8000`),
);

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});


app.post('/game', (req, res) =>{
        res.send("foo")
});

app.get('/game', (req, res) => {
    // console.log('params', req.query)

        res.send("foo")
    

});


app.post('/move', (req, res) =>{
    

    res.send("foo")

})





app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

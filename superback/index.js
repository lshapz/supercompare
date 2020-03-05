var express =  require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
const chars = require('./characters-corrupt.json')


let ids = chars.map(item=> item.id).sort((a,b)=> a>b);
let newIds = 1; 
let newSupers = chars.map(item=>{
    if (!item.id) {
        if (!ids.includes(newIds)) {
            item.id = newIds;
            ids.push(newIds)
            newIds +=1 
        }
    }
    if (!item.name) {
        item.name = item.slug.split('-')[1];
    } 
    item.name = item.name.split(' ').map(item=> item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');

    return item;
})


app.listen(8000, () =>
  console.log(`Example app listening on port 8000`),
);

app.get('/', (req, res) => {
    // return chars; 
  return res.send(newSupers);
});

app.get('/:id', (req, res) => {
    let thisChar = newSupers.filter(item=> item.id == req.params.id )[0]

  return res.send(thisChar);
});
// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method');
// });
// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });


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

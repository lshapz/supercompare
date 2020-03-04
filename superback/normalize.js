const characters = require('./characters-corrupt.json')
fs = require('fs');


let columns = {}; 


function getCol(keys, object) {
    // console.log('keys', keys)
    keys.forEach(item=>{
        let val = object[item]
        
        if (Array.isArray(val)) {

            columns[item] = "TEXT []"
        } else if (typeof val == 'object') {
            getCol(Object.keys(object[item]), val)
        } else if (typeof val === 'number') {
            columns[item] = "INT"   
        } else if (typeof val === 'string') {
            columns[item] = "TEXT"
        } 
    
    
    })
}

let zero = characters[4]

// console.log(zero)

getCol(Object.keys(zero), zero)


fs.writeFile('justcolumns.json', JSON.stringify(columns), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
  
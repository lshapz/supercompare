const pg = require('pg');
const chars = require('./characters-corrupt.json')

  
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const columns = require('./justcolumns.json')
const pool = new pg.Pool({
    user: 'api_user',
    host: 'localhost',
    database: 'super_api',
    password: 'password',
    port: 5432,
});

let longString = "CREATE TABLE supers("

Object.keys(columns).forEach(item=>{
    longString += item + " " + columns[item]
    if (item === "id") {
        longString += " PRIMARY KEY, "
    } else if (item === "lg") {
        longString += ")"
    } else {
        longString += ", "
    }
})
console.log(longString)

pool.connect();
// pool.query(longString);


let rowStrings = [];
let parents = [ "powerstats", "appearance", "biography", "work", "connections", "images"]


chars.forEach((item, index)=>{

    let myStr = []
    let query = "INSERT INTO supers(";
    Object.keys(columns).forEach(item2=>{
        query += item2 + ", "
        if (item[item2]) {
            myStr.push(item[item2])
        } else {
            parents.forEach(item3=>{
                if (item[item3][item2]) {
                    myStr.push(item[item3][item2])
                }
            })
        }

    })

    query += ") VALUES(" 

    myStr.forEach(item=>{
        if (typeof item === "string") {
            query += "'" + item + "',"  
        } else if (Array.isArray(item)){ 
            query += "{" + item.map(item=> "'"+item+"'").join(', ') + "},"
        } else {
            query += item + ","
        }
    })

    query = query.slice(0, query.length -2)
    query += ");"
        if (index == 5) {

    console.log(query)

    pool.query(query)
        }
        // if (index == 5) {

        // }
    

    
})



// console.log(rowStrings[0])
// INSERT INTO student(firstname, lastname, age, address, email)VALUES('Mary Ann', 'Wilters', 20, '74 S Westgate St', 'mroyster@royster.com')




// pool.query()


// pool.end()

// ((err, client, releaseConn) => {
//     if (err) return releaseConn(err)

//     client.query(longString, (err) => {
//         if (err) {
//           return err
//         }

//       client.end()
//       releaseConn()
//       done()
//     })
//   });

// console.log(longString)
// console.log(client)

// const query = client.query(longString);
// console.log(query)
// query.on('end', () => { client.end(); });

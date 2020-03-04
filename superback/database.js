const pg = require('pg');
const columns = require('./characters-corrupt.json')

  
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
pool.query(longString);






pool.query()


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

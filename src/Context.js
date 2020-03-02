import React from 'react';
// import { withRouter } from 'react-router-dom'
import allSupers from './assets/characters-corrupt.json'; 

let ids = allSupers.map(item=> item.id).sort((a,b)=> a>b);
let newIds = 1; 

let newSupers = allSupers.map(item=>{
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


  newSupers = newSupers.sort((a,b)=>{
    if (a.name > b.name) {
        return 1
      }
      if (b.name > a.name) {
        return -1
      }
      return 0
  
  })

//   let names = newSupers.map(item=> item.name);
//   console.log(names)




const MyContext = React.createContext( {data: newSupers})
export const MyProvider = MyContext.Provider
export const MyConsumer = MyContext.Consumer
export default MyContext

// export default withRouter(MyContext);
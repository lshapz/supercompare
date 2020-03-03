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
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
    
  })

//   let names = newSupers.map(item=> item.name);
//   console.log(names)




const MyContext = React.createContext( {data: newSupers, comparators:[], updateComparators: (id)=>{
    if (this.comparators.includes(id)) {
        this.comparators.splice(this.comparators.indexOf(id))
    } else if (this.comparators.length < 2) {
        this.comparators.push(id)
    }
}})
export const MyProvider = MyContext.Provider
export const MyConsumer = MyContext.Consumer
export const supers = newSupers; 
export default MyContext;

// export default withRouter(MyContext);
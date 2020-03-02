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
    return item;

})




const MyContext = React.createContext( {data: newSupers})
// {data: allSupers}
export const MyProvider = MyContext.Provider
export const MyConsumer = MyContext.Consumer
export default MyContext

// export default withRouter(MyContext);
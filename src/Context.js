import React from 'react';
// import { withRouter } from 'react-router-dom'
import allSupers from './assets/characters-corrupt.json'; 

const MyContext = React.createContext( {data: allSupers})
// {data: allSupers}
export const MyProvider = MyContext.Provider
export const MyConsumer = MyContext.Consumer
export default MyContext

// export default withRouter(MyContext);
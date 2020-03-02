import React from 'react';
import '../index.css';
import MyContext from '../Context';
import Supershow from './Supershow';

class ShowAll extends React.Component {


  render() {
    
    let allSupers = this.context.data;



    let supers = allSupers.map((value, index)=>{
      return <Supershow id={value.id} key={index} />
    })


    return (
        

        <div className="container"> 
          {supers}
        </div>
  
    );
  }
}
ShowAll.contextType = MyContext;
export default ShowAll;

import React from 'react';
import '../index.css';
import MyContext from '../Context';
import Supershow from './Supershow';
import {Link} from  "react-router-dom";;

class ShowAll extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // debugger
    // }

    componentDidUpdate() {
        // debugger
    }




  render() {

    // let comparators = this.context.comparators;
    
    let allSupers = this.context.data;



    let supers = allSupers.map((value, index)=>{
      return <Supershow id={value.id} key={index} all={true} />
    })


    let names = this.props.vsProp.map(item=>{
        return allSupers.filter(item2=> item2.id === item)[0].name;
    })

    let vs = names.map((item, index)=>{
        return <ShowCompare id={item} key={index} />
    })

    let fight; 

    if (vs.length === 2) {
        let foo = this.props.vsProp;

        let link = `/compare/${foo[0]}/${foo[1]}`
        fight = <Link to={link}>Compare {names[0]} vs {names[1]} </Link> 
    }




    return (
        <div>
            {vs}
            {fight}
        <div className="container"> 
          {supers}
        </div>

        </div>

  
    );
  }
}

function ShowCompare(props) {
    return (
        
        <span> {props.id} </span>

    )
} 

ShowAll.contextType = MyContext;
export default ShowAll;

import React from 'react';
import '../index.css';
import MyContext from '../Context';
import Supershow from './Supershow';

class ShowAll extends React.Component {


  render() {
    
    console.log(this.context);
    let allSupers = this.context.data;
    debugger

    let goodGuys = allSupers.filter(item=> 
      item.biography.alignment && item.biography.alignment.toLowerCase() === "good");
    let badGuys = allSupers.filter(item=> item.biography.alignment && item.biography.alignment.toLowerCase() === "bad");
    let unknownGuys =  allSupers.filter(item=> !item.biography.alignment);


    let sorter = (a,b) =>{
      if (a > b) {
        return 1
      }
      if (b > a) {
        return -1
      }
      return 0
    }


    let alphaSupers = goodGuys.sort((a,b)=>{
      if (a.name && b.name) {
        return sorter(a.name, b.name)
      } else if (!a.name && b.name) {
        return sorter(a.biography.fullName, b.name)
      } else {
        return sorter(a.biography.fullName, b.biography.fullName)
      }

    })

    let alphaVillains = badGuys.sort((a,b)=>{
      if (a.name && b.name) {
        return sorter(a.name, b.name)
      } else if (!a.name && b.name) {
        return sorter(a.biography.fullName, b.name)
      } else {
        return sorter(a.biography.fullName, b.biography.fullName)
      }

    })

    let alphaRest = unknownGuys.sort((a,b)=>{
      if (a.name && b.name) {
        return sorter(a.name, b.name)
      } else if (!a.name && b.name) {
        return sorter(a.biography.fullName, b.name)
      } else {
        return sorter(a.biography.fullName, b.biography.fullName)
      }

    })

    let supers = alphaSupers.map((value, index)=>{
      return <Supershow id={value.id} key={index} />
    })

    let villains = alphaVillains.map((value, index)=>{
      return <Supershow id={value.id} key={index} />
    })

    let unknown = alphaRest.map((value, index)=>{
      return <Supershow id={value.id} key={index} />
    })

    return (
        

        <div className="container"> 

        <div> 
          {supers}
        </div> 
        <div>
          {villains}
        </div>
        <div>
          {unknown} 
          
        </div>
        </div>
  
    );
  }
}
ShowAll.contextType = MyContext;
export default ShowAll;

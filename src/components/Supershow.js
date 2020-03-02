import React from 'react'
import Context from '../Context.js'
import '../index.css';

class Supershow extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {hero: props.id}; 
    }

    render() {
        let value = this.context.data.filter(item=> item.id === this.state.hero)[0];
        
        debugger
        let alignment = value.biography.alignment ? value.biography.alignment.toUpperCase() : "unknown";
        
        let image_url = value.images.xs;
        
        let name = value.name ? value.name : value.biography.fullName;
        
        let adjustedName = name.split(' ').map(item=> item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');

return (  


  <div className="superShow">
    <h2>{adjustedName}</h2> 
    <img src={image_url} alt="hero xs"></img>

      <h1>{alignment}</h1>
    {/* <h4>feels like {feels}° </h4> */}
  </div>
  )

}
}

export default Supershow

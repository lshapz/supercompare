import React from 'react'
import MyContext from '../Context.js'
import '../index.css';
import {Link} from  "react-router-dom";;

class Supershow extends React.Component {

    constructor(props) {
        super(props);
        let hero; 
        if (props.id) {
            hero = props.id; 
        } else  {
            hero = parseInt(this.props.match.params.id)
        }
        


        this.state = {hero: hero};
    }

    render() {
        let value = this.context.data.filter(item=> item.id === this.state.hero)[0];
        
        let alignment = value.biography.alignment ? value.biography.alignment.toUpperCase() : "unknown";
        
        let image_url = value.images.xs;
        
        // let name = value.name ? value.name : value.biography.fullName;
        
        let adjustedName = value.name.split(' ').map(item=> item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');

        console.log(adjustedName);

        let linkTo = '/showone/' + value.id;
        let powerstats;

        if (this.props.compare) {
          powerstats = Object.keys(value.powerstats).map(item=>{
            return <li> <strong>{item}</strong>: {value.powerstats[item]} </li>

          });
          
        }


return (  


  <div className="superShow">
   <Link to={linkTo}> <h2>{adjustedName}</h2> </Link>
    <img src={image_url} alt="hero xs"></img>

      <h1>{alignment}</h1>

      <ul if="powerstats"> 
        {powerstats}      
      </ul>

    {/* <h4>feels like {feels}° </h4> */}
  </div>
  )

}
}
Supershow.contextType = MyContext;

export default Supershow

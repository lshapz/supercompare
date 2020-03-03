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

        if (props.all) {
          
        }
        
        this.handleOnClick = this.handleOnClick.bind(this)


        this.state = {hero: hero};
    }
    handleOnClick(event) {
      // let comp = this.context.comparators;
      let val = parseInt(event.target.value);
      this.context.addComparator(val);
      // if (comp.includes(event.target.value)){
      //   this.context.comparators.splice(val)
      // } else if (comp.length < 2) {
      //   this.context.comparators.push(val)
      // } 
    }

    render() {
        let value = this.context.data.filter(item=> item.id === this.state.hero)[0];
        
        let alignment = value.biography.alignment ? value.biography.alignment.toUpperCase() : "unknown";
        
        let image_url = value.images.xs;
        
        let name = value.name 

        let linkTo = '/showone/' + value.id;
        let powerstats;

        if (this.props.compare) {
          powerstats = Object.keys(value.powerstats).map(item=>{
            return <li> <strong>{item}</strong>: {value.powerstats[item]} </li>

          });
          
        }

        let clickMe; 
        if (this.props.all) {
          clickMe = <label htmlFor="name"> Compare {name} <input disabled={this.props.disabled} type="checkbox" id={name} name="name" value={value.id} onClick={this.handleOnClick}></input> </label>
        }


return (  


  <div className="superShow">
   <Link to={linkTo}> <h2>{name}</h2> </Link>
    <img src={image_url} alt="hero xs"></img>

      <h4>{alignment}</h4>

      <ul if="powerstats"> 
        {powerstats}      
      </ul>
      <div if="clickMe">
        {clickMe}
      </div>

    {/* <h4>feels like {feels}° </h4> */}
  </div>
  )

}
}
Supershow.contextType = MyContext;

export default Supershow

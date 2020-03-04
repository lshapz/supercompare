import React from 'react'
import MyContext from '../Context.js'
import '../index.css';
// import {Link} from  "react-router-dom";
import Supershow from './Supershow';

class Compare extends React.Component {

    constructor(props) {
        super(props);
        let hero1 = parseInt(this.props.match.params.id)
        let hero2 = parseInt(this.props.match.params.id2)

        this.state = {hero1: hero1, hero2: hero2};
    }

    render() {
        // let value = this.context.data.filter(item=> item.id === this.state.hero)[0];
        
        // let alignment = value.biography.alignment ? value.biography.alignment.toUpperCase() : "unknown";
        
        // let image_url = value.images.xs;
        
        // let name = value.name ? value.name : value.biography.fullName;
        
        // let adjustedName = name.split(' ').map(item=> item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');

        // let linkTo = '/showone/' + value.id;

return (  


  <div className="compare">
        <Supershow id={this.state.hero1} compare={true} />

        <Supershow id={this.state.hero2} compare={true} />

  </div>
  )

}
}
Compare.contextType = MyContext;

export default Compare

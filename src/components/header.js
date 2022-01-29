import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Element from './element';

 class Header extends Component{

  constructor(props){
    super(props);

    this.state = {
      element: 'Fullname',

    };

    this.changeElement=this.changeElement.bind(this);
  }

  changeElement(newEl){
    this.setState({
      element: newEl.data? newEl.data : 'Fullname',
    }
      
    )
  }
  
  render(){
    return (
      <div className='header'>
        <Element item={this.state.element} name='element' changeEl={this.changeElement}/>
      </div>
    );
  }
    

}

export default Header;
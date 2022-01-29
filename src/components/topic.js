import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Element from './element';

 class Topic extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          element: this.props.name,
    
        };
    
        this.changeElement=this.changeElement.bind(this);
      }
    
      changeElement(newEl){
        this.setState({
          element: newEl.data? newEl.data : 'SubTopic',
        }
          
        )
      }
  
  render(){
    return (
      <div className='topic'>
        <Element item={this.state.element} name='element' changeEl={this.changeElement}/>
        <hr />
      </div>
    );
  }
    

}

export default Topic;

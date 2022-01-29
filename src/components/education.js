import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Element from './element';
import Topic from './topic';
import Detail from './detail'
 export default class Education extends Component{

  constructor(props){
    super(props);

    this.state = {
      numChildren: 0,

    };

    this.addDetail = this.addDetail.bind(this);
    this.removeDetail = this.removeDetail.bind(this);
  }


  addDetail(){
    this.setState({
      numChildren: this.state.numChildren + 1,
    });
  }
  removeDetail(){
    this.setState({
      numChildren: this.state.numChildren - 1,
    });
  }

  
  render(){

    let children = [];

    for (let i = 0; i < this.state.numChildren; i++) {
      children.push(<Detail first='Name of establishment (attended date)' second='Name of your Degree' third='Description of your degree' />);

      
    }
    return (
      <div className='education'>
        <Topic name='Education'/>
        <Detail first='Name of establishment (attended date)' second='Name of your Degree' third='Description of your degree' />
        {children}
        <button onClick={this.addDetail}>Add</button><button onClick={this.removeDetail}>Remove</button>
      </div>
    );
  }
}


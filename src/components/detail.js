import react, { Component } from 'react'
import Element from './element';

export default class Detail extends Component{

    constructor(props){
      super(props);
  
      this.state = {
        first: this.props.first,
        second: this.props.second,
        third: this.props.third,
  
      };
  
      this.changeElement=this.changeElement.bind(this);
    }
  
    changeElement(newEl){
      this.setState({
        school: newEl.data? newEl.data : this.props.school,
      });
    }

    render(){
    return (

      <div className='detail'>
        <div style={{fontSize: '18px', fontWeight:'bold'}}>
          <Element item={this.state.first} name={'first'} changeEl={this.changeElement}/>
        </div>
        <div style={{padding: '5px'}}>
          <li>
          <Element item={this.state.second} name={'second'} changeEl={this.changeElement}/>
          </li>
          <li>
          <Element item={this.state.third} name={'third'} changeEl={this.changeElement}/>
          </li>
        </div>
        
      </div>
    )
  }
}


import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Topic from './topic';
import Element from './element';

 class Skills extends Component{

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
          children.push(<Skill />);
    
          
        }
        return (
          <div className='description'>
            <Topic name='Skill'/>
            <Skill/>
            {children}
            <div style={{display: 'flex'}}>
                <button onClick={this.addDetail}>Add</button>
                <button onClick={this.removeDetail}>Remove</button>
          
            </div>
            </div>
        );
      }
    }
    
  

export default Skills;

class Skill extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          element: 'My skill!',
    
        };
    
        this.changeElement=this.changeElement.bind(this);
      }
    
      changeElement(newEl){
        this.setState({
          element: newEl.data? newEl.data : 'My skill',
        }
          
        )
      }
      
      render(){
        return (
          <div>
            <Element item={this.state.element} name='element' changeEl={this.changeElement}/>
          </div>
        );
      }
        
}
import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Header from './header';
import General from './general';
import Description from './description';
import Education from './education'
import Experience from './experience';
import Skills from './skills';
import Instruction from './instruction';

 class Canvas extends Component{

  constructor(props){
    super(props);

    this.state = {
      cvMode: false,
    };

    this.changeMode=this.changeMode.bind(this);

  }

  changeMode(){
    this.setState({
      cvMode: true,
    });
  }
  
  render(){

    let childrens;

    if(this.state.cvMode){
      childrens = <div>
        <Header />
        <General />
        <Description/>
        <Education/>
        <Experience/>
        <Skills/>
      </div>
    }

    else{
      childrens = <Instruction onClick={this.changeMode}/>
    }

    return (
      <div className='canvas'>
        {childrens}
      </div>
    );
  }
    

}

export default Canvas;

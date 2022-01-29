import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Header from './header';
import General from './general';
import Description from './description';
import Education from './education'
import Experience from './experience';
import Skills from './skills';

 class Canvas extends Component{

  constructor(props){
    super(props);

  }
  
  render(){
    return (
      <div className='canvas'>
        <Header />
        <General />
        <Description/>
        <Education/>
        <Experience/>
        <Skills/>
      </div>
    );
  }
    

}

export default Canvas;

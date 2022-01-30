import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';


export default class Instruction extends Component{

    constructor(props){
      super(props);
  
    }
    
    render(){
      return (
        <div onClick={this.props.onClick}>
            <div className='instruction' >
                <p>
                    Hello welcome to CV maker.
                </p>
                <br/>
                <br/>
                <br/>
                <p>
                You will see default text when you click in the grey region. 
                <br/>
                To change the text double click on it and type. Then, press the enter key in your keyboard.
                </p>
                <br/>
                <br/>
                <p>
                Click on this grey region to start.
                </p>

            </div>

        </div>
        
      );
    }
      
  
  }
  
  
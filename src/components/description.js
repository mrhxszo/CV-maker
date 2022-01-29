import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Topic from './topic';

 class Description extends Component{

  constructor(props){
    super(props);

    this.state = {
      description: 'Write about yourself!',
      editMode: false,

    };

    this.changeElement=this.changeElement.bind(this);
    this.changeEditMode=this.changeEditMode.bind(this);
  }

  changeEditMode(x){
    this.setState({
        editMode: !x,
    });}

  changeElement(e){
    if(e.key == 'Enter'){
        this.setState({
            description: e.target.value?  e.target.value : 'Write about yourself!',
          });
          this.changeEditMode(this.state.editMode);
        }
        
    }
    

  
  render(){

    return (
      <div className='description'>
          <Topic name='Description' />
            <div>
                {this.state.editMode?  <textarea onKeyPress={this.changeElement} className={'description-input'+" "+'input'} placeholder={this.state.description} /> : <p onClick={() => this.changeEditMode(this.state.editMode)}>{this.state.description}</p>}
            </div>
              
      </div>
    );
  }
    

}

export default Description;
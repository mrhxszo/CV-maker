import react, { Component } from 'react';
import '../styles/main.css';
import '../styles/reset.css';
import Element from './element';
import profilepic from '../images/emptyprofilepic.png';
import Topic from './topic' 

 class General extends Component{

  constructor(props){
    super(props);

    this.state = {
      address: 'Address',
      phone: 'Phone Number',
      email: 'Email',
      linkedln: 'linkedln',
      github: 'github',
      url: profilepic,

    };

    this.changeElement=this.changeElement.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  changeElement(newEl){
    
    switch(newEl.name){
        case 'address':
            this.setState({
                address: newEl.data? newEl.data : 'Address',
              });
              break;
        case 'phone':
            this.setState({
                phone: newEl.data? newEl.data : 'Phone Number',
              });
              break;
        case 'email':
            this.setState({
                email: newEl.data? newEl.data : 'Email',
              });
        case 'linkedln':
                this.setState({
                    linkedln: newEl.data? newEl.data : 'linkedln',
                  });
        case 'github':
                    this.setState({
                        github: newEl.data? newEl.data : 'github',
                      });
            break;
    }
    
  }
  changeImage(event){
    const x = URL.createObjectURL(event.target.files[0]);
    this.setState({
      url: x? x:profilepic,
    })
  }
  
  render(){
    return (
    <div className='general'>
        <Topic name='Contact'/>
        <div className='gen-container'>
          <div className='gen-info'>
              <Element item={this.state.address} name='address' changeEl={this.changeElement}/>
              <Element item={this.state.phone} name='phone' changeEl={this.changeElement}/>
              <Element item={this.state.email} name='email' changeEl={this.changeElement}/>
              <Element item={this.state.linkedln} name='linkedln' changeEl={this.changeElement}/>
              <Element item={this.state.github} name='github' changeEl={this.changeElement}/>
          </div>

          <div style={{display:'flex',flexDirection:'column'}}>
            
            <img src={this.state.url} alt="CV Picture" className='cv-pic' onChange={this.changeImage} ></img>
            <input type="file" accept="image/*" onChange={this.changeImage}/>
        
          </div>

            
        
        </div>
    </div>
        
    );
  }
    

}

export default General;
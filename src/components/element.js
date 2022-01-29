import react, {Component} from 'react';
import '../styles/main.css';
import '../styles/reset.css';

class Element extends Component {

    constructor(props){
        super(props)

        this.state = {
            editMode: false,
        }

        this.changeEditMode = this.changeEditMode.bind(this);
        this.update= this.update.bind(this);
    }


    changeEditMode(x){
        this.setState({
            editMode: !x,
        });
    }


    update(e){
        if(e.key == 'Enter'){
            this.props.changeEl({name:this.props.name, data:e.target.value});
            this.changeEditMode(this.state.editMode);

        }

        
    }


    render(){
        const {item, changeElement} = this.props;
        return(
            <div >
                
                {this.state.editMode? <input className='input' type='text' onKeyPress={this.update} placeholder='Type Here'/> : <p onClick={() => this.changeEditMode(this.state.editMode)}>{item}</p> }
                
            </div>
            
        )
    }
}

export default Element;
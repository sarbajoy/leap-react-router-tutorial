import React, {Component} from 'react';

class TextBox extends Component {
    constructor (props){
        super(props);
        this.input = React.createRef();
    }
    
    render(){
        return (
            <input
                type="text"
                defaultValue={this.props.defaultValue}
                onChange={this.props.onChange}
            />
        );
           
    }
}

export default TextBox;
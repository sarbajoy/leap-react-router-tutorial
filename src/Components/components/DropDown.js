import React, {Component} from 'react';

class DropDown extends Component {
    constructor (props){
        super(props);
        this.input = React.createRef();
        this.MakeItem=this.MakeItem.bind(this);
        
    }

    MakeItem(choice){
        return <option id={choice}> {choice} </option>;
    }
    
    render(){
        var Data     = this.props.dataArray,
            MakeItem = function(X) {
                return <option value={X.name} key={X.name}>{X.name}</option>;
            };


        return <select name={this.props.id} onChange={this.props.onChange}>{Data.map(MakeItem)}</select>;
           
    }
}

export default DropDown;
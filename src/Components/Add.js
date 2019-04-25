import React, {Component} from 'react';
import Header from './components/Header';
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Label from "./components/Label";


class Add extends Component {
    render(){
        return (
            
            <div>    
                <div> 
                    <Header value= "Add Recipients" /> 
                </div>    

                <div> 
                    <Label value= "Select Recipient: " /> 
                    <TextBox 
                        value={this.props.transactionAmount} 
                        onChange={this.props.changeRecipientName}
                    /> 
                </div>  

                <div> 
                    <Button text= "Add Recipient" onClick={this.props.addRecipient}/> 
                </div> 
               
            </div>
        )
    }
}

export default Add;
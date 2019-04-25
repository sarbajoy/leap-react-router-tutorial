import React, {Component} from 'react';
import Header from './components/Header';
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import Label from "./components/Label";


class Remove extends Component {
    render(){
        return (
            
            <div>    
                <div> 
                    <Header value= "Remove Recipients" /> 
                </div>    

                <div> 
                    <Label value= "Select Recipient: " /> 
                    <DropDown 
                        dataArray={this.props.recipientList} 
                        name="recipients" 
                        onChange={this.props.changeRecipient}
                    /> 
                </div>  

                <div> 
                    <Button text= "Remove Recipient" onClick={this.props.removeRecipient}/> 
                </div> 
               
            </div>
        )
    }
}

export default Remove;
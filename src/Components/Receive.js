import React, {Component} from 'react';
import TextBox from './components/TextBox.js';
import Header from './components/Header.js';
import Label from './components/Label.js';
import Button from './components/Button.js';
import DropDown from './components/DropDown.js';
import CustomerInfo from './components/CustomerInfo.js';

class Receive extends Component {


    render(){
        const recBalance = this.props.recipientIndex !==0 ?
        this.props.recipientList[this.props.recipientIndex].balance : 0;


        var recipientInfo = this.props.recipientIndex !==0 ? 
           ( <div>
                <CustomerInfo 
                    userType="Recipient: "
                    userName={this.props.recipient}
                    balance= {recBalance}
                />
            </div>): null;

        return (
            
            <div>    
                <div> 
                    <Header value= "Receive Money" /> 
                    
                </div>    

                <CustomerInfo
                    userType="Sender: "
                    userName={this.props.userName}
                    balance= {this.props.customerBalance}
                />


                <div> 
                    <Label value= "Transaction Amount: " /> 
                    <TextBox 
                        value={this.props.transactionAmount} 
                        onChange={this.props.handleChangeTextBox}
                        /> 
                </div>  

                <div> 
                    <Label value= "Send To: " /> 
                    <DropDown 
                        dataArray={this.props.recipientList} 
                        name="recipients" 
                        onChange={this.props.changeRecipient}/> 
                </div>  

                 <div> 
                    <Button text= "Receive" onClick={this.props.addTransactionAmount}/> 
                    <Header value={this.props.recipient}/>
                </div> 

                {recipientInfo} 
            </div>

            
        )
    }
}

export default Receive;
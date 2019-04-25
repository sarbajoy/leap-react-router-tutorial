import React, {Component} from 'react';
import Label from './Label.js';


class CustomerInfo extends Component {


    render(){
        return (
            
            <div>    
                <div> 
                    <Label value= {this.props.userType} /> 
                    <Label value ={this.props.userName} /> 
                </div> 

                <div> 
                    <Label value= "Balance: " /> 
                    <Label value ={this.props.balance} /> 
                </div>  

            </div>

            
        )
    }
}

export default CustomerInfo;
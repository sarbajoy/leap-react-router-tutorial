import React, {Component} from 'react';
import Header from './components/Header';
import CustomerInfo from './components/CustomerInfo.js';

class Home extends Component {
    render(){
        return (
            
            <div>    
                <div> 
                    <Header value= "Account Details" /> 
                    
                </div>    

                <CustomerInfo
                    userType="Account Holder: "
                    userName={this.props.userName}
                    balance= {this.props.customerBalance}
                />
            </div>
  
        )
    }
}

export default Home;
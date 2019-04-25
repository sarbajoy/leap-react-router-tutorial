import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./Components/Home";
import Receive from "./Components/Receive";
import Send from "./Components/Send";
import Error from "./Components/Error";
import Navigation from "./Components/Navigation";
import Add from "./Components/Add";
import Remove from "./Components/Remove";

class App extends Component {

  constructor (props){
    super(props);
    this.state = {
        userName: "Michael Scott",
        customerBalance: 40000 ,
        transactionAmount: 0 ,
        recipientList: [
            {name: "", balance: 0},
            {name: "Dwight Schrute", balance: 1000000},
            {name: "Toby Flenderson", balance: 20000},
            {name: "Jim Halpert", balance: 150000},
            {name: "Pam Beesly", balance: 50000},
            {name: "Angela Martin", balance: 90000},
            {name: "Stanley Hudson", balance: 200000},
            {name: "Phyllis Vance", balance: 100000},
            {name: "Kelly Kapoor", balance: 15000},
            {name: "Ryan Howard", balance: 5000},
            {name: "Jan Levinson", balance: 20000},
            {name: "Holly Flax", balance: 30000},
            {name: "Oscar Martinez", balance: 500000},
            {name: "Creed Bratton", balance: 100},
        ],
        recipient: "",
        recipientIndex : 0,
    };
    this.handleChangeTextBox=this.handleChangeTextBox.bind(this);
    this.changeRecipient=this.changeRecipient.bind(this);
    this.addTransactionAmount=this.addTransactionAmount.bind(this);
    this.removeTransactionAmount=this.removeTransactionAmount.bind(this);
    this.changeRecipientName = this.changeRecipientName.bind(this);
    this.addRecipient = this.addRecipient.bind(this);
    this.removeRecipient = this.removeRecipient.bind(this);
  }

  handleChangeTextBox(e) {
    const intValue = parseInt(e.target.value);
    this.setState({transactionAmount: intValue});
  }

  changeRecipient(e){
    //store name from target value
    const recipientName = e.target.value;

    //obtain new Index
    var index = -1;
    this.state.recipientList.find(function(item, i){
        if(item.name === recipientName){
            index = i;
            return i;
        }
      });

    this.setState({recipient: recipientName, recipientIndex: index});
  }

  removeTransactionAmount(){
    if (this.state.recipientIndex !== 0){
        //obtain balance of recipient
        var recBalance = this.state.recipientList[this.state.recipientIndex].balance;

        //get current recipient list
        var recList = this.state.recipientList;

        //change balances
        var newCustBalance = recBalance - this.state.transactionAmount>0 && this.state.recipient !== ""?
            this.state.customerBalance - this.state.transactionAmount : this.state.customerBalance;
    
        var newRecipientBalance = recBalance - this.state.transactionAmount>0 && this.state.recipient !== ""? 
            this.state.recipientList[this.state.recipientIndex].balance + this.state.transactionAmount : recBalance ;
        
        var recipientName = newCustBalance !== this.state.customerBalance ? "" : "I DECLARE BANKRUPTCY!!!!!!!!";
            
        //update recipient balance
        recList[this.state.recipientIndex].balance = newRecipientBalance;

        this.setState ({
          customerBalance: newCustBalance, 
          recipientList: recList, 
          recipient: recipientName,
          recipientIndex: 0,
        });
    }
  }

  addTransactionAmount(){
    if (this.state.recipientIndex !==0){
        //obtain balance of recipient
        var recBalance = this.state.recipientList[this.state.recipientIndex].balance;

        //get current recipient list
        var recList = this.state.recipientList;


        //change balances
        var newCustBalance = recBalance - this.state.transactionAmount>0 && this.state.recipient !== ""?
        this.state.customerBalance + this.state.transactionAmount : this.state.customerBalance;
    
        var newRecipientBalance = recBalance - this.state.transactionAmount>0 && this.state.recipient !== ""? 
        this.state.recipientList[this.state.recipientIndex].balance - this.state.transactionAmount : recBalance ;

        //update recipient balance
        recList[this.state.recipientIndex].balance = newRecipientBalance;

        this.setState ({
          customerBalance: newCustBalance, 
          recipientList: recList, 
          recipient: "",
          recipientIndex: 0,
        });
    }
  }

  changeRecipientName(e) {
    var recipientName = e.target.value;
    this.setState({recipient: recipientName});
  }

  addRecipient(){
    //store name from target value
    const recipientName = this.state.recipient;

    //generate default balance
    const recipientBalance = 10000;

    //create a new recipient object
    const recipient = {name:recipientName, balance: recipientBalance};

    //obtain recipient list from state
    var recList = this.state.recipientList;

    //add recipient to list and then set state
    recList.push(recipient);

    this.setState({recipientList: recList});
  }

  removeRecipient(){
    //obtain index
    const recIndex = this.state.recipientIndex;

    //obtain recipient list from state
    const recList = 
    this.state.recipientList.slice(0, recIndex).concat(this.state.recipientList.slice(recIndex + 1, this.state.recipientList.length));

    this.setState({recipientList: recList});
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route 
            path="/"
            render={(props) => <Home {...props} 
              userName={this.state.userName} 
              customerBalance={this.state.customerBalance} 
              />}
            exact
          />

          <Route 
            path="/send"
            render={(props) => 
            <Send {...props} 
              userName={this.state.userName} 
              customerBalance={this.state.customerBalance} 
              handleChangeTextBox = {this.handleChangeTextBox}
              recipientIndex= {this.state.recipientIndex}
              recipient = {this.state.recipient}
              transactionAmount = {this.state.transactionAmount}
              recipientList = {this.state.recipientList}
              changeRecipient = {this.changeRecipient}
              removeTransactionAmount = {this.removeTransactionAmount}
            />}
          />  


        <Route 
            path="/receive"
            render={(props) => 
            <Receive {...props} 
              userName={this.state.userName} 
              customerBalance={this.state.customerBalance} 
              handleChangeTextBox = {this.handleChangeTextBox}
              recipientIndex= {this.state.recipientIndex}
              recipient = {this.state.recipient}
              transactionAmount = {this.state.transactionAmount}
              recipientList = {this.state.recipientList}
              changeRecipient = {this.changeRecipient}
              addTransactionAmount = {this.addTransactionAmount}
            />}
          />  

          <Route 
            path="/add"
            render={(props) => 
            <Add {...props} 
              changeRecipientName = {this.changeRecipientName}
              addRecipient = {this.addRecipient}
            />}
          />  `

          <Route 
            path="/remove"
            render={(props) => 
            <Remove {...props} 
              recipientList = {this.state.recipientList}
              changeRecipient = {this.changeRecipient}
              removeRecipient = {this.removeRecipient}
            />}
          />  `

          <Route component={Error} />
        </Switch>  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
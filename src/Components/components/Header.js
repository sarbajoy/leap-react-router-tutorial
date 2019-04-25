import React, {Component} from 'react';

class Header extends Component {

    render(){
        return (
            <h1>
                {this.props.value}
            </h1>
        );
    }
}

export default Header;
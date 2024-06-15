import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to  {this.props.name} the {this.props.designation}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;
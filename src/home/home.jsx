import React from 'react';
import logo from '../logo.svg';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }


    render() {
        return (
            <div className="">
                <div className="">
                    <img src={logo} className="App-logo" alt="logo" />
                   <div><h1>Welcome To React !!</h1></div>
                </div>
            </div>
        );
    }
}

export { Home }; 
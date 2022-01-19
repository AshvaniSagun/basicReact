import React from 'react';
import '../getApi/getApi.scss';

class GetRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            check: false
        };
    }
    // The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM.
    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://run.mocky.io/v3/e9b39f92-4ecf-4db4-a709-23eec89d98bb')
            .then(response => response.json())
            .then(data => {
                console.log(data.response['DE1078'][0].datsourceName);
                this.setState({
                    data: data.response['DE1078']
                })
            });
    }

    sayHello() {
        alert('Hello!');
    }
    

    render() {
        return (
            <div className="">
                <h5 className="">A Simple GET Request Api</h5>
                <div className="">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Data Source name</th>
                                <th>Export Date</th>
                            </tr>
                            {this.state.data.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.datsourceName}</td>
                                    <td>{item.exportDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ position: "relative", top: "5px" }}>
                        <button onClick={this.sayHello} type="button" className="btn btn-success">Alert</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetRequest;
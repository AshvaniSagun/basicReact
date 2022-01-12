import React from 'react';
import '../getApi/getApi.scss';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

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

    render() {
        return (
            <div className="">
                <h5 className="">Practice of Simple GET Request Api</h5>
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
                </div>
            </div>
        );
    }
}

export { GetRequest }; 
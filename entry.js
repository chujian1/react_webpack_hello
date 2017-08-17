import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class HelloMessage extends Component {

    render() {
        return (<div>Hello Yaopeijuan</div>);
    }
}
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('app')
);
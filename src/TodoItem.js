
/**
 * Created by vanny on 10.08.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';


export class TodoItem extends React.Component {

    render() {
        return <li>{this.props.value}</li>;
    }
}

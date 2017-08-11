/**
 * Created by vanny on 10.08.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './TodoList.js';
import styles from  './style.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            item: ''
        };

        this.InputComment = this.InputComment.bind(this);
        this.SaveComment = this.SaveComment.bind(this);

    }



    SaveComment(event) {

        this.setState({item: event.target.value});


    };

    InputComment(e) {
        const item = this.state.item;

        this.setState({
            comment: this.state.comment.concat([item]),
            item: ''
        });

        e.preventDefault();
    };

    render() {
        return (
            <div className="rendBlock">
                <h1>My Tasks</h1>
                <div>
                    <input type="text" value={this.state.item} onChange={this.SaveComment}/>
                    <input type='button' value="GO" onClick={this.InputComment}/>
                </div>

                <TodoList comments={this.state.comment}/>

            </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('todo'));


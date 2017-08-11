/**
 * Created by vanny on 10.08.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoItem} from './TodoItem.js';

export class TodoList extends  React.Component {

    render() {
        return(
            <div className="InputSpace">
                <ol>
                    {
                        this.props.comments.map(
                            (task) => <TodoItem value={task}/>
                        )
                    }
                </ol>
            </div>
        )
    }
}
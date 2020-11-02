import React, { Component } from 'react';
import AddItemButton from './add-item-button';
import GraphicButton from './graphic-button';
import ToggleFilterButton from './toggle-filter-button'
//import {filterItems} from './todo-item-store';

import './todo-list.css';

function TodoItem(props) {
    let removeItem = (event) => {
        event.preventDefault();
        props.removeItem(props.id);
    };

    let className = "item";
    let completeComponent = null;

    if( props.done === false) {
        let completeItem = (event) => {
            event.preventDefault();
            props.completeItem(props.id);
        }
    
        completeComponent = <GraphicButton source="/img/checkbox.png" action={completeItem} title="Complete item" />;
        //<a href={completeID} onClick={completeItem}>(complete)</a>;

    } else {
        className += " done";
    }

    return(
        <li className={className}>
            <div className="title">
                {props.name}
            </div>
            <div className="controls">
                {completeComponent}
                <GraphicButton source="/img/close.png" action={removeItem} title="Delete item" />
            </div>
        </li>
    );
}

/*
        <li className={className}>
            {props.name}
            {completeComponent}
            <a href={removeID} onClick={removeItem}>(delete)</a></li>
*/

class ToDoList extends Component {
    
    componentWillMount() {
        console.log("ToDoList::componentWillMount");
    }

    render(props) {
        let {items, actions, showAll} = props;

        let showItems = items; //filterItems(items, showAll);

        let renderItems = showItems.map( item => 
            <TodoItem 
                key={item.id.toString()}
                id={item.id}
                done={item.done}
                name={item.title} 
                removeItem={actions.removeItem} 
                completeItem={actions.completeItem} /> );

        return(
            <ul id="todo-list">
                {renderItems}
                <li className="actions">
                    <AddItemButton addItem={actions.addItem} />
                </li>
                <li className="actions">
                    {/*<ToggleFilterButton action={actions.toggleFilter} showAll={showAll}/> */}
                </li>
            </ul>
        );
    }
}

export default ToDoList;
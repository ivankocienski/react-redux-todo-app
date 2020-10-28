import React from 'react';
import AddItemButton from './add-item-button';
import ToggleFilterButton from './toggle-filter-button'
import {filterItems} from './todo-item-store';

import './todo-list.css';

function TodoItem(props) {
    let removeItem = () => {
        props.removeItem(props.id);
    };

    let completeItem = () => {
        props.completeItem(props.id);
    }

    let className = "item";
    if(props.done) {
        className += " done";
    }

    return(
        <li className={className}>
            {props.name}
            <a href='#' onClick={completeItem}>(complete)</a>
            <a href='#' onClick={removeItem}>(delete)</a></li>
    );
}

function ToDoList(props) {
    let {items, actions, showAll} = props;

    let showItems = filterItems(items, showAll);

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
                <ToggleFilterButton action={actions.toggleFilter} showAll={showAll}/>
            </li>
        </ul>
    );
}

export default ToDoList;
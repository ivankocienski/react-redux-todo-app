import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AddItemButton from './add-item-button';
import GraphicButton from './graphic-button';
import ToggleFilterButton from './toggle-filter-button'

import {
    addItem,
    removeItem,
    completeItem,
    setShowAllFilter,
    itemsSelector,
    showAllSelector
} from './todo-slice';

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

function ToDoList () {
    const items = useSelector(itemsSelector);
    const dispatch = useDispatch();
    const showAll = useSelector(showAllSelector);

    let renderItems = items.map( item => 
        <TodoItem 
            key={item.id.toString()}
            id={item.id}
            done={item.done}
            name={item.title} 
            removeItem={() => dispatch(removeItem(item.id))} 
            completeItem={() => dispatch(completeItem(item.id))} /> );

    return(
        <ul id="todo-list">
            {renderItems}
            <li className="actions">
                <AddItemButton addItem={name => dispatch(addItem(name))} />
            </li>
            <li className="actions">
                <ToggleFilterButton action={show => dispatch(setShowAllFilter(show))} showAll={showAll}/>
            </li>
        </ul>
    );
}

export default ToDoList;
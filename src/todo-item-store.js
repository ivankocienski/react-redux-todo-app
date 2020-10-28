import _ from 'lodash';

export function generateID() {
    return Date.now() + Math.random(1000);
}

function makeStore(idGenerator) {
    return({
        items: [
            { id: idGenerator(), title: "First item", done: true },
            { id: idGenerator(), title: "Second item", done: false },
            { id: idGenerator(), title: "Third item", done: true },
            { id: idGenerator(), title: "More items follow", done: true },
            { id: idGenerator(), title: "No", done: false },
            { id: idGenerator(), title: "Etcetera", done: false }
        ],
        showAll: false
    });
}

function doAddItem(state, name, idGenerator) {
    let item = {
        id: idGenerator(),
        title: name,
        done: false
    };

    let newItems = [...state.items];
    newItems = newItems.concat(item);

    let newState = {
        items: newItems,
        showAll: state.showAll
    }

    return newState;
}

function doRemoveItem(state, id) {
    let newItems = _.filter(
        state.items,
        (l) => l.id !== id);

    let newState = {
        items: newItems,
        showAll: state.showAll
    }

    return newState;
}

function doCompleteItem(state, id) {
    let newItems = state.items.map( item => {
        if(item.id === id) {
            let doneItem = {...item};
            doneItem.done = true;
            return doneItem;
        }
        
        return item;
    });

    let newState = {
        items: newItems,
        showAll: state.showAll
    }

    return newState;
}

function doToggleFilter(state) {

    let newState = {...state};
    newState.showAll = !newState.showAll;

    return newState;
}

/*
~~~~~~~~~~~~~D
*/

function todoItemReducerGenerator(idFunction) {
    return function(state, action) {
        if(state === undefined) {
            return makeStore(idFunction);
        }

        if(action.type === 'ADD_ITEM') {
            return doAddItem(state, action.name, idFunction);
        }

        if(action.type === 'REMOVE_ITEM') {
            return doRemoveItem(state, action.id);
        }

        if(action.type === 'COMPLETE_ITEM') {
            return doCompleteItem(state, action.id);
        }

        if(action.type === 'TOGGLE_FILTER') {
            return doToggleFilter(state);
        }

        return state;
    }
}

export const addItemAction = { type: "ADD_ITEM", name: "" };
export const removeItemAction = { type: "REMOVE_ITEM", id: 0 };
export const toggleFilterAction = { type: "TOGGLE_FILTER" };
export const completeItemAction = { type: "COMPLETE_ITEM", id: 0 };

export function addItemActionFor(todoName) {
    let action = {...addItemAction};
    action.name = todoName;

    return action;    
}

export function removeItemActionFor(itemID) {
    let action = {...removeItemAction};
    action.id = itemID;

    return action;
}

export function completeItemActionFor(itemID) {
    let action = {...completeItemAction};
    action.id = itemID;

    return action;
}

export function filterItems(items, hideDone) {
    let filter = hideDone 
        ? () => true
        : (item) => !item.done;

    return _.filter(items, filter);
}

export default todoItemReducerGenerator;
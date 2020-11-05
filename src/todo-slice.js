import _ from 'lodash';

import {createSlice} from '@reduxjs/toolkit'

// THIS IS WRONG!
export function generateID() {
    return Date.now() + Math.random(1000);
}

const initialState = {
    items: [],
    showAll: false
};

const reducers = {
    addItem: (state, action) => {
        let name = action.payload;

        let item = {
            id: generateID(),
            title: name,
            done: false
        };
    
        state.items = state.items.concat(item);
    },
    
    removeItem: (state, action) => {
        let id = action.payload;

        state.items = _.filter(
            state.items,
            (l) => l.id !== id);
    },
    
    completeItem: (state, action) => {
        let id = action.payload;
        
        state.items = state.items.map( item => {
            if(item.id === id) {
                let doneItem = {...item};
                doneItem.done = true;
                return doneItem;
            }
    
            return item;
        });
    },

    setShowAllFilter: (state, action) => {
        let filterSet = action.payload;

        let newState = {
            ...state,
            showAll: filterSet
        };

        return newState;
    }
}

// slice
export const todoSlice = createSlice({
    name: 'item',
    initialState,
    reducers
});

// actions
export const {
    addItem,
    removeItem,
    setShowAllFilter,
    completeItem
} = todoSlice.actions;

// selectors
export const itemsSelector = (state) => {
    let {showAll, items} = state.item;

    if(showAll === true) {
        return items;
    }

    return _.filter(
        items,
        (l) => l.done === false);
}

export const showAllSelector = state => state.item.showAll;

// reducer
export default todoSlice.reducer;
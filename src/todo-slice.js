import _ from 'lodash';

import {createSlice} from '@reduxjs/toolkit'

// THIS IS WRONG!
export function generateID() {
    return Date.now() + Math.random(1000);
}

const initialState = {
    items: []
};

const reducers = {
    addItem: (state, action) => {
        let name = action.payload;

        let item = {
            id: generateID(),
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
    },
    
    removeItem: (state, action) => {
        let id = action.payload;

        let newItems = _.filter(
            state.items,
            (l) => l.id !== id);
    
        let newState = {
            items: newItems,
            showAll: state.showAll
        }
    
        return newState;
    },
    
    completeItem: (state, action) => {
        let id = action.payload;
        
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
}

// slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers
});

// actions
export const {
    addItem,
    removeItem,
    completeItem
} = todoSlice.actions;

// selectors
export const itemsSelector = (state) => {
    console.log("itemSelector: state=", state);
    return state.item.items;
}

// reducer
export default todoSlice.reducer;
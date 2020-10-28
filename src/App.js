import {connect} from 'react-redux';

import PrimaryScreen from './primary-screen';

import 
  { addItemActionFor, removeItemActionFor, toggleFilterAction, completeItemActionFor} 
  from './todo-item-store';

function stateMapper(state) {
  return {...state};
}

function dispatchMapper(dispatch) {
  return () => {
    return {
      actions: {
        addItem: (name) => dispatch(addItemActionFor(name)),
        removeItem: (id) => dispatch(removeItemActionFor(id)),
        completeItem: (id) => dispatch(completeItemActionFor(id)),
        toggleFilter: () => dispatch(toggleFilterAction)
      }
    }
  };
}

const AppStore = connect(stateMapper, dispatchMapper)(PrimaryScreen);

export default AppStore;

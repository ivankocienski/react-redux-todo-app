import React from 'react';

import Header from './header';
import Footer from './footer';
import TodoList from './todo-list';

function PrimaryScreen(props) {
  return (
    <>
      <Header />
      <main>
        <TodoList 
          items={props.items} 
          showAll={props.showAll} 
          actions={props.actions}/>
          
      </main>
      <Footer />
    </>
  );
}

export default PrimaryScreen;
import Header from './header';
import Footer from './footer';
import TodoList from './todo-list';

function App(props) {
  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
      <Footer />
    </>
  );
}
export default App;

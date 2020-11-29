import logo from './logo.svg';
import './App.css';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';

function App() {
  return (
    <div className='App'>
      <h1>Book App</h1>
      <Books />
    </div>
  );
}

export default App;

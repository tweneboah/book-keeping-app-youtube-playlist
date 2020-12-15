import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/books' component={Books} />
          <Route exact path='/addbook' component={AddBook} />
          <Route exact path='/register' component={RegisterUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

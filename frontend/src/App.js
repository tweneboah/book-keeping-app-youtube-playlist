import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginUser} />

          <Route exact path='/profile' component={Profile} />
          <Route exact path='/books' component={Books} />
          <Route exact path='/addbook' component={AddBook} />
          <Route exact path='/register' component={RegisterUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

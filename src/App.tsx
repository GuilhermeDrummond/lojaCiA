import { type } from 'os';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './components/Login';

import { Navbar } from './components/Navbar';
import { NewClientForm } from './components/NewClientForm';
import { ProductsList } from './components/ProductList';
import { GlobalStyle } from './styles/global';

type User = {
  username : string
  password : string
}

export default function App() {

  const [usersList, setUsersList] = useState<User[]>([
    {
      username: 'Ricardo',
      password: 'anjo'
    }
  ])

  return (
    <>
      <Router>
        <Navbar />  
        <Route path='/' exact render={props => <Login {...props} users={usersList} />} />
        <Route path='/products' exact component={ProductsList} />
        <Route path='/create-client' exact component={NewClientForm} />
      </Router>

      <GlobalStyle />
    </>
  );
}

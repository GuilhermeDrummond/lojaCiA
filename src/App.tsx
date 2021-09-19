import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar';
import { NewClientForm } from './components/NewClientForm';
import { ProductsList } from './components/ProductList';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <>

      <Router>
        <Navbar />  
        <Route path='/' exact component={NewClientForm} />
        <Route path='/products' exact component={ProductsList} />
      </Router>

      <GlobalStyle />
    </>
  );
}

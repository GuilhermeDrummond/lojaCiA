import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { NewClientForm } from './components/NewClientForm';
import { ProductsList } from './components/ProductList';
import { GlobalStyle } from './styles/global';

import Produto from './classes/Produto'
import Cliente from './classes/Cliente';
import { clientePadrao } from './classes/Gerador';
import Carrinho from './classes/Carrinho';
import { Cart } from './components/Cart';


export default function App() {

  const [usersList, setUsersList] = useState<Cliente[]>([
    clientePadrao
  ])

  function handleSubmitNewClientForm(newClient : Cliente) {
    setUsersList([...usersList, newClient])
  }

  const [cartList, setCartList] = useState<Carrinho>(new Carrinho())

  function handleAddCart(prod : Produto) {
    const newCartList = cartList
    newCartList.adicionarProduto(prod)
    setCartList(newCartList)
  }

  // const [isLogged, setIslogged] = useState(false)

  return (
    <>
      <Router>
        <Navbar />  
        <Route path='/' exact render={props => <Login {...props} users={usersList} />} />
        <Route path='/products' exact render={props => <ProductsList {...props} onAddCart={handleAddCart} />} />
        <Route path='/cart' exact render={props => <Cart {...props} carrinho={cartList} />} />
        <Route path='/create-client' exact render={props => <NewClientForm {...props} onSubmit={handleSubmitNewClientForm} />} />
      </Router>

      <GlobalStyle />
    </>
  );
}

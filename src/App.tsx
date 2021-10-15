import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { NewClientForm } from './components/NewClientForm';
import { ProductsList } from './components/ProductList';
import { GlobalStyle } from './styles/global';

import Produto from './classes/Produto'
import Cliente from './classes/Cliente';
import { clientePadrao, Loja1, Loja2, Loja3 } from './classes/Gerador';
import Carrinho from './classes/Carrinho';
import { Cart } from './components/Cart';
import Loja from './classes/Loja';
import { CheckOut } from './components/CheckOut';
import { MyAccount } from './components/MyAccount';


export default function App() {

  const [activeUser, setActiveUser] = useState<Cliente | undefined>()

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

  function handleRemoveCart(prod : Produto){
    const newCartList = cartList
    newCartList.removerProduto(prod)
    setCartList(newCartList)

    const lojaDoProduto = catalogoCompleto.find(elem => elem.getEstoque().getProdutos().find(item => {
      return item.produto.id === prod.id
    }))

    setCatalogoCompleto(catalogoCompleto.map(elem => {
      if (elem.getCNPJ() === lojaDoProduto?.getCNPJ()) {
          elem.getEstoque().adicionarProduto(prod)
      }
      
      return elem
  }))
  }

  const [catalogoCompleto, setCatalogoCompleto] = useState([
    Loja1, 
    Loja2, 
    Loja3
  ])

  function handleAddCartStore(item : Produto, loja : Loja) {
    
    setCatalogoCompleto(catalogoCompleto.map(elem => {
        if (elem.getCNPJ() === loja.getCNPJ()) {
            elem.getEstoque().removerProduto(item)
        }
        
        return elem
    }))

    handleAddCart(item)        
  }


  return (
    <>
      <Router>
        <Navbar onLogout={() => setActiveUser(undefined)} usuarioLogado={activeUser}/>  

        <Route 
          path='/products' exact 
          render={props => <ProductsList {...props} onAddCart={handleAddCartStore} catalogoCompleto= {catalogoCompleto} />} 
        />

        <Route 
          path='/login' exact 
          render={props => <Login {...props} users={usersList} onLogin={setActiveUser}/>} 
        />

        <Route 
          path='/checkout' 
          render={props => <CheckOut {...props} carrinho={cartList}/>}
        />

        <Route 
          path='/cart' exact 
          render={props => <Cart {...props} carrinho={cartList} onRemove={handleRemoveCart} usuarioLogado={activeUser}/>} 
        />

        <Route 
          path='/create-client' exact 
          render={props => <NewClientForm {...props} onSubmit={handleSubmitNewClientForm} />} 
        />

        <Route 
          path='/account' exact 
          render={props => <MyAccount {...props} cliente={activeUser} />} 
        />
      </Router>

      <GlobalStyle />
    </>
  );
}

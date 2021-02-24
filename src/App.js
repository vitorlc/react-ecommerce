import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Store } from './store'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/carrinho" component={Cart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App

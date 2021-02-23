import React from 'react'
import { Provider } from 'react-redux';

import {Store} from './store'
import Home from './pages/Home'

const App = () => {
  return (
    <Provider store={Store}>
      <Home/>
    </Provider>
  )
}

export default App

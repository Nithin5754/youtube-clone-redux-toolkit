import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import appStore from './utils/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
    <App />

      </Router>
    </Provider>
  </React.StrictMode>,
)

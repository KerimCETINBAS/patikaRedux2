import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css'
import App from './App'
import { Provider } from "react-redux"
import Store from "./redux"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  
  </React.StrictMode>
)

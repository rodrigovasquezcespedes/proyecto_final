import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import TecnoProvider from './context/TecnoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Auth0Provider
        domain='rominadeveloper.us.auth0.com'
        clientId='raMWUtwhmenJ0Fwqlp4FilGSaB42gLWP'
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <TecnoProvider>
          <App />
        </TecnoProvider>
      </Auth0Provider>
    </HashRouter>
  </React.StrictMode>
)

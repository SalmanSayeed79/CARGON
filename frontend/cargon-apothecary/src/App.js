import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartContextProvider from './Hooks/CartContextProvider'
import './index.css'
import {ThemeProvider} from '@mui/material'
import {createTheme} from "@mui/material/styles"
import Home from './Pages/Home'
import Appbar from "./Components/Appbar"
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Account from './Pages/Account'
import OrderDetails from './Pages/OrderDetails'
import OrderDetailsSearch from './Pages/OrderDetailsSearch'
import ProductDetails from './Pages/ProductDetails'
import Factories from './Pages/Factories'
import PrevOrderContextProvider from './Hooks/PrevOrderContext'
const customTheme=createTheme({
  palette:{
 
  },
  typography: {
    fontFamily: [
      "Oswald",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

})

function App() {
  

  

  return(
    <BrowserRouter>
      <CartContextProvider>
        <PrevOrderContextProvider>
          <ThemeProvider theme={customTheme}>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/account" exact component={Account}/>
              <Route path="/products" exact component={Factories}/>
              <Route path="/products/:id" exact component={Products}/>
              <Route path="/product/:id" exact component={ProductDetails}/>
              <Route path="/cart" exact component={Cart}/>
              <Route path="/orderdetails" exact component={OrderDetailsSearch}/>
              <Route path="/orderdetails/:id" exact component={OrderDetails}/>
            </Switch>
          </ThemeProvider>
        </PrevOrderContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;

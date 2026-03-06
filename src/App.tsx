import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ProductsProvider } from './context/ProductsContext/ProductsProvider'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { FilterProvider } from './context/FilterContext/FilterProvider'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { BrandManager } from './components/AdminComponents/BrandManager/BrandManager'
import { CategoryManager } from './components/AdminComponents/CategoryManager/CategoryManager'
import { AdminPanelNav } from './components/AdminComponents/AdminPanelNav/AdminPanelNav'
import { Login } from './components/Login/Login'

function App() {

  return (
    <>
      <BrowserRouter >
        <CartProvider>
          {/*<Header />*/}
          <ProductsProvider>
            <Routes>
              <Route path={`/`} element={<FilterProvider><ItemListContainer titulo={"Productos"} /></FilterProvider>} />
              <Route path={`/category/:category`} element={<FilterProvider><ItemListContainer titulo={"Productos"} /></FilterProvider>} />
              <Route path={`/detail/:id`} element={<ItemDetailContainer />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/brand' element={<BrandManager />} />
              <Route path='/category' element={<CategoryManager />} />
              <Route path='/product' element={<AdminPanelNav/>} />
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </ProductsProvider>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App

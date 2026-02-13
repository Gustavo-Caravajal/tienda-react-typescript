import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ProductsProvider } from './context/ProductsContext/ProductsProvider'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { FilterProvider } from './context/FilterContext/FilterProvider'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {

  return (
    <>
      <BrowserRouter >
        <CartProvider>
          <Header />
          <ProductsProvider>
            <Routes>
              <Route path={`/`} element={<FilterProvider><ItemListContainer titulo={"Productos"} /></FilterProvider>} />
              <Route path={`/category/:category`} element={<FilterProvider><ItemListContainer titulo={"Productos"} /></FilterProvider>} />
              <Route path={`/detail/:id`} element={<ItemDetailContainer />} />
            </Routes>
          </ProductsProvider>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App

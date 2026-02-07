import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ProductsProvider } from './context/ProductsContext/ProductsProvider'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <ProductsProvider>
          <Routes>
            <Route path={`/`} element={<ItemListContainer titulo={"Productos"}/>}/>
            <Route path={`/category/:category`} element={<ItemListContainer titulo={"Productos"}/>}/>
          </Routes>
        </ProductsProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

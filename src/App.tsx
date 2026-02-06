import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ProductsProvider } from './context/ProductsContext/ProductsProvider'

function App() {

  return (
    <>
      <Header />
      <ProductsProvider>
        <ItemListContainer titulo='Productos' />
      </ProductsProvider>
      <Footer />
    </>
  )
}

export default App

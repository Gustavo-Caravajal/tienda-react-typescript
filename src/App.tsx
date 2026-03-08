import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ProductsProvider } from './context/ProductsContext/ProductsProvider'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { FilterProvider } from './context/FilterContext/FilterProvider'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { Login } from './components/Login/Login'
import { AuthProvider } from './context/AuthContext/AuthProvider'
import { MainLayout } from './layouts/MainLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { ProductManager } from './components/AdminComponents/ProductManager/ProductManager'
import { BrandManager } from './components/AdminComponents/BrandManager/BrandManager'
import { CategoryManager } from './components/AdminComponents/CategoryManager/CategoryManager'

function App() {

  return (
    <>
      <BrowserRouter >
        <AuthProvider>
          <CartProvider>
            <ProductsProvider>

              <Routes>
                <Route element={<MainLayout />}>
                  <Route
                    path={`/`}
                    element={<FilterProvider><ItemListContainer titulo={"Productos"} /></FilterProvider>}
                  />
                  <Route
                    path={`/category/:category`}
                    element={<FilterProvider><ItemListContainer titulo={"Productos"} /></FilterProvider>}
                  />
                  <Route
                    path={`/detail/:id`}
                    element={<ItemDetailContainer />}
                  />
                  <Route
                    path='/carrito'
                    element={<Cart />}
                  />
                </Route>
                <Route path='/admin/' element={<AdminLayout />}>
                  <Route index element={<Login />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path='panel/products' element={<ProductManager />} />
                    <Route path='panel/brands' element={<BrandManager />} />
                    <Route path='panel/categories' element={<CategoryManager />} />
                  </Route>
                </Route>

              </Routes>
            </ProductsProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App

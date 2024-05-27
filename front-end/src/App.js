import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
        <Route path="/logout" element={<h1>Logout Components</h1>} />
        <Route path="/profile" element={<h1>profile Components</h1>} />
        </Route>
        <Route path="/signup" element={<Signup />}  />
        <Route path="/login"  element={<Login/>} />

      </Routes>
     </BrowserRouter>
     <Footer></Footer>
    </div>
  );
}

export default App;
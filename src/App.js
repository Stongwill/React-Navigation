
import './app.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";

import { MainLayout } from './components/MainLayout';
import { Clients } from './pages/Clients';
import { Categories } from './pages/Categories';
import { Cities } from './pages/Cities';
import { Banners } from './pages/Banners';
import { Seminars } from './pages/Seminars';
import { Promocode } from './pages/Promocode';
import { Protocols } from './pages/Protocols';
import { Orders } from './pages/Orders';
import { Brands } from './pages/Brands';
import { Products } from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
   
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/seminars" element={<Seminars />} />
            <Route path="/promocode" element={<Promocode />} />
          </Route>
        </Routes>
   </BrowserRouter>
  );
}
export default App;

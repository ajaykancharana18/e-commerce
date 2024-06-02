import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Product from "./Components/Product";
import Cart from "./Pages/Cart";
import ScrollToTop from "./Components/scroll";

export default function App() {
  return (
    <main>
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/men" element={<Men />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Women" element={<Women />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/kids" element={<Kids />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} >

          </Route>
          <Route path="/signin" element={<Signin />} >

          </Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main >
  )
}
import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Addcart from "./pages/Addcart";
import About from "./pages/About";
import Popular from "./pages/Popular";
import Aallcollection from "./about/Aallcollection";
import Amancoll from "./about/Amancoll";
import Awomancoll from "./about/Awomancoll";
import Achildcoll from "./about/Achildcoll";
import SearchPage from "./pages/SearchPage";
import ProductDetail from "./pages/ProductDetail";
// index.js or App.js
import './App.css';  // or './App.css'

function App() {

  return (
    <>
    
    <Routes>
      <Route path="/*" element={<Home />}/>
      <Route path="/about" element={<About />}>
        <Route index element={<Aallcollection />} />
        <Route path="amancoll" element={<Amancoll />} />
        <Route path="awomancoll" element={<Awomancoll />} />
        <Route path="achildcoll" element={<Achildcoll />} />
      </Route>
      <Route path="/cart" element={<Addcart />}/>
      <Route path="/Popular" element={<Popular />}/>
      <Route path="/SearchPage" element={<SearchPage />}/>
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>

    </>
  )
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Shapes from "./pages/Shapes";
import MediaBlogs from "./pages/MediaBlogs";
import ProductCategories from "./pages/ProductCategories";
import GetInTouch from "./pages/GetIntouch";
import Photos from "./pages/Productsphotos"; 
import Industries from "./pages/Industries";
import GradeDetail from "./pages/GradeDetail";
const Page = ({ name }) => {
  return (
    <div className="pt-32 text-center text-3xl font-semibold">
      {name}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/categories" element={<ProductCategories />} />
        <Route path="/photos" element={<Photos />} /> 
        <Route path="/shapes" element={<Shapes />} />
        <Route path="/applications" element={<Page name="Applications" />} />
        <Route path="/calculator" element={<Page name="Weight Calculator" />} />
        <Route path="/cutting" element={<Page name="Cutting Guides" />} />
        <Route path="/blogs" element={<MediaBlogs />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="*" element={<Page name="Page Not Found" />} />
<Route path="/grades" element={<GradeDetail />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
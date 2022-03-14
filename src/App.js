import ProductListing from "./components/ProductListing";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          {/* <Route>404 Not Found</Route> */}
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductSelection from './pages/ProductSelection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/React-Course-Project" element={<LandingPage />} />
        <Route path="/React-Course-Project/products" element={<ProductSelection />} />
      </Routes>
    </Router>
  )
}

export default App;
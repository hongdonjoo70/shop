import { useState } from 'react'
import data from './data.js';
import Product from './Product.jsx';
import './App.css'

function App() {
  const [shoes] = useState(data);

  return (
    <>
    <div className="App">
      <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors">
            Navbar
          </a>
          <div className="flex space-x-6 ml-6 mr-auto">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium">
              Pricing
            </a>
          </div>
        </div>
      </nav>
      <div className="slider" />
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            shoes.map((shoe, i) =>
              <Product shoes={shoe} key={i} />)
          }
        </div>
      </div>  
    </div>
    </>
  );
}

export default App

import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">SIYAH</Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/orders" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Orders</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link to="/disclaimer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Disclaimer</Link>
              <Link to="/payment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Payment</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-lg">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/orders" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Orders</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link to="/disclaimer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Disclaimer</Link>
            <Link to="/payment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Payment</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
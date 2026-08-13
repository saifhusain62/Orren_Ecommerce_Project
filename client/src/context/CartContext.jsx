import React, { createContext, useContext, useState, useEffect } from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [toast, setToast] = useState(null);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1, price: 179.98 }];
    });

    setToast({
      message: 'Added to cart successfully!',
      productName: product.title || 'Classic Slim-Fit Denim Jacket'
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        setToast({
          message: 'Removed from wishlist!',
          productName: product.title || 'Classic Slim-Fit Denim Jacket'
        });
        return prev.filter(item => item.id !== product.id);
      } else {
        setToast({
          message: 'Added to wishlist!',
          productName: product.title || 'Classic Slim-Fit Denim Jacket'
        });
        return [...prev, { ...product, price: 179.98 }];
      }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, wishlistItems, toggleWishlist, removeFromWishlist }}>
      {children}

      {/* Global Toast Popup */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-out ${toast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        {toast && (
          <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 min-w-[300px] flex items-start gap-4">
            <div className="bg-green-100 text-green-600 rounded-full p-2 mt-1">
              <FiCheckCircle size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-sm mb-1">{toast.message}</h4>
              <p className="text-gray-500 text-xs">{toast.productName}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-gray-400 hover:text-gray-800 transition-colors p-1"
            >
              <FiX size={16} />
            </button>
          </div>
        )}
      </div>
    </CartContext.Provider>
  );
};

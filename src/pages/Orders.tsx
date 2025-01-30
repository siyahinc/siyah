import React, { useState } from 'react';
import { categories, subCategories } from '../data/orderOptions';

const Orders = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-lg p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Place Your Order</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-white mb-2">Select Category</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubCategory(''); // Reset subcategory when category changes
              }}
              className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-white focus:ring-2 focus:ring-white"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          {category && (
            <div>
              <label className="block text-white mb-2">Select Sub-Category</label>
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-white focus:ring-2 focus:ring-white"
              >
                <option value="">Select a sub-category</option>
                {subCategories[category as keyof typeof subCategories].map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}

          <button 
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors mt-8"
            disabled={!category || !subCategory}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuData';
import FloatingCartButton from '../components/FloatingCartButton';
import MenuCard from '../components/MenuCard';
import PageTransition from '../components/PageTransition';

export default function Menu() {
  const navigate = useNavigate();
  const { addToCart, getTotalItems } = useCart();
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const totalItems = getTotalItems();

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 800);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* 顶部标题栏 */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">🍜 菜单</h1>
          <div className="text-sm text-gray-600">选择您喜欢的菜品</div>
        </div>
      </header>

      {/* 菜品网格 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 landscape:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:landscape:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {menuItems.map(item => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
              showAdded={addedItem === item.id}
            />
          ))}
        </div>
      </div>

        {/* 悬浮购物车按钮 */}
        <FloatingCartButton itemCount={totalItems} onClick={() => navigate('/checkout')} />
      </div>
    </PageTransition>
  );
}


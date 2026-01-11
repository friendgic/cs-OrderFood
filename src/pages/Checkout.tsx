import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import EmptyState from '../components/EmptyState';
import PageTransition from '../components/PageTransition';
import CartItemCard from '../components/CartItemCard';
import BackButton from '../components/BackButton';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, createOrder } = useCart();
  const [message, setMessage] = useState('');

  const handleSubmitOrder = () => {
    if (cartItems.length === 0) {
      alert('购物车为空！');
      return;
    }
    createOrder(message);
    navigate('/report');
  };

  const totalPrice = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex flex-col items-center justify-center p-4">
        <EmptyState
          icon={ShoppingCart}
          title="购物车是空的"
          description="快去选择您喜欢的菜品吧！"
          action={
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              返回菜单
            </motion.button>
          }
        />
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* 顶部标题栏 */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center gap-4">
          <BackButton onClick={() => navigate('/')} />
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">结算</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 landscape:py-4">
        {/* 购物车商品列表 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 landscape:p-6 mb-6 landscape:mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">已选菜品</h2>
          
          <div className="space-y-6">
            {cartItems.map(item => (
              <CartItemCard
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>

        {/* 留言区域 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 landscape:p-6 mb-6 landscape:mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">备注留言</h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="请输入特殊要求或备注（选填）"
            className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={4}
          />
        </div>

        {/* 总价和提交按钮 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 landscape:p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold text-gray-700">总计</span>
            <span className="text-3xl font-bold text-orange-600">¥{totalPrice.toFixed(2)}</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmitOrder}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg"
          >
            <Send size={24} />
            提交订单
          </motion.button>
        </div>
      </div>
      </div>
    </PageTransition>
  );
}


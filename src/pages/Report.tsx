import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PageTransition from '../components/PageTransition';
import OrderItemCard from '../components/OrderItemCard';
import { formatDate } from '../utils/format';

export default function Report() {
  const navigate = useNavigate();
  const { order } = useCart();

  useEffect(() => {
    if (!order) {
      navigate('/');
    }
  }, [order, navigate]);

  if (!order) {
    return null;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* 顶部标题栏 */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-green-600">订单详情</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/')}
            className="text-green-600 hover:text-green-700"
          >
            <Home size={28} />
          </motion.button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 landscape:py-4">
        {/* 成功提示 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">订单提交成功！</h2>
          <p className="text-gray-600">您的订单已确认，请耐心等待</p>
          <p className="text-sm text-gray-500 mt-2">订单时间：{formatDate(order.timestamp)}</p>
        </motion.div>

        {/* 订单商品 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">订单菜品</h2>
          
          <div className="space-y-6">
            {order.items.map((item, index) => (
              <OrderItemCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* 备注信息 */}
        {order.message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">备注信息</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="text-gray-700">{order.message}</p>
            </div>
          </motion.div>
        )}

        {/* 总价 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
        >
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-700">订单总额</span>
            <span className="text-4xl font-bold text-green-600">¥{order.total.toFixed(2)}</span>
          </div>
        </motion.div>

        {/* 返回按钮 */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg"
        >
          <Home size={24} />
          返回菜单
        </motion.button>
      </div>
      </div>
    </PageTransition>
  );
}


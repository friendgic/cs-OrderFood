import { motion } from 'framer-motion';
import { CartItem } from '../types';

interface OrderItemCardProps {
  item: CartItem;
  index: number;
}

export default function OrderItemCard({ item, index }: OrderItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-5 p-5 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl hover:shadow-md transition-shadow"
    >
      {/* 商品图片 */}
      <motion.img
        src={item.imageUrl}
        alt={item.name}
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        className="w-32 h-32 landscape:w-24 landscape:h-24 object-cover rounded-lg shadow-md"
      />

      {/* 商品信息 */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-semibold">
            x{item.quantity}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{item.description}</p>
        <div className="flex justify-between items-end">
          <div className="text-orange-600 font-bold">
            <span className="text-lg">¥{item.price}</span>
            <span className="text-gray-500 ml-2 text-sm">单价</span>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 mb-1">小计</div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-xl font-bold text-orange-600"
            >
              ¥{(item.price * item.quantity).toFixed(2)}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



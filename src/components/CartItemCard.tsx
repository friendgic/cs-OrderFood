import { motion } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItemCard({ item, onUpdateQuantity, onRemove }: CartItemCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-5 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
    >
      {/* 商品图片 */}
      <motion.img
        src={item.imageUrl}
        alt={item.name}
        loading="lazy"
        layoutId={`cart-img-${item.id}`}
        className="w-24 h-24 landscape:w-20 landscape:h-20 object-cover rounded-lg shadow-md"
      />

      {/* 商品信息 */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-800 text-lg truncate">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
        <div className="flex items-center gap-4">
          <span className="text-orange-600 font-bold text-lg">¥{item.price}</span>
          
          {/* 数量控制 */}
          <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="text-orange-600 hover:text-orange-700 active:text-orange-800"
              aria-label="减少数量"
            >
              <Minus size={18} />
            </motion.button>
            <motion.span
              key={item.quantity}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="font-semibold w-8 text-center"
            >
              {item.quantity}
            </motion.span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="text-orange-600 hover:text-orange-700 active:text-orange-800"
              aria-label="增加数量"
            >
              <Plus size={18} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* 删除按钮 */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-600 self-start"
        aria-label="删除商品"
      >
        <Trash2 size={22} />
      </motion.button>
    </motion.div>
  );
}



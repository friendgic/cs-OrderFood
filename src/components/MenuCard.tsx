import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  showAdded: boolean;
}

export default function MenuCard({ item, onAddToCart, showAdded }: MenuCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
    >
      {/* 图片容器 */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
        <motion.img
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* 添加成功提示 */}
        <AnimatePresence>
          {showAdded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 bg-green-500/80 flex items-center justify-center backdrop-blur-sm"
            >
              <div className="text-white text-xl font-bold drop-shadow-lg">已添加 ✓</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 菜品信息 */}
      <div className="p-5 landscape:p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-4 landscape:mb-2 line-clamp-2 leading-relaxed">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-600">¥{item.price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(item)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md active:shadow-sm transition-shadow"
          >
            <Plus size={18} />
            加入
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}



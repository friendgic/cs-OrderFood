import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export default function FloatingCartButton({ itemCount, onClick }: FloatingCartButtonProps) {
  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 landscape:bottom-4 landscape:right-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-5 landscape:p-4 shadow-2xl flex items-center gap-3 z-50 active:shadow-lg transition-shadow"
        >
          <ShoppingCart size={24} className="landscape:w-5 landscape:h-5" />
          <motion.span
            key={itemCount}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-bold text-lg landscape:text-base"
          >
            {itemCount}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}



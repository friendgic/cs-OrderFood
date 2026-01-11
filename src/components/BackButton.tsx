import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export default function BackButton({ onClick, label = '返回' }: BackButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, x: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
      aria-label={label}
    >
      <ArrowLeft size={28} />
      <span className="hidden sm:inline">{label}</span>
    </motion.button>
  );
}



import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mb-4"
      >
        <Icon size={64} className="text-gray-300" />
      </motion.div>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{title}</h2>
      {description && <p className="text-gray-500 mb-4">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </motion.div>
  );
}



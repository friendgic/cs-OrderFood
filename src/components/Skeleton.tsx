import { motion } from 'framer-motion';

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="aspect-square bg-gray-200"
      />
      <div className="p-4">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          className="h-6 bg-gray-200 rounded mb-2"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="h-4 bg-gray-200 rounded w-3/4 mb-3"
        />
        <div className="flex justify-between items-center">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            className="h-8 bg-gray-200 rounded w-16"
          />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            className="h-10 bg-gray-200 rounded-full w-20"
          />
        </div>
      </div>
    </div>
  );
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            className="w-24 h-24 bg-gray-200 rounded-lg"
          />
          <div className="flex-1">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 + 0.1 }}
              className="h-6 bg-gray-200 rounded mb-2"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 + 0.2 }}
              className="h-4 bg-gray-200 rounded w-2/3"
            />
          </div>
        </div>
      ))}
    </>
  );
}



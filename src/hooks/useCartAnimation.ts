import { useEffect, useState } from 'react';

export function useCartAnimation(itemCount: number) {
  const [prevCount, setPrevCount] = useState(itemCount);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (itemCount > prevCount) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
    setPrevCount(itemCount);
  }, [itemCount, prevCount]);

  return isAnimating;
}



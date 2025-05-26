import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images?.length) return null;

  return (
    <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-gray-200">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Screenshot ${index + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover absolute"
        />
      </AnimatePresence>
    </div>
  );
}

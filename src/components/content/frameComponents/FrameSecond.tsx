import { motion } from 'framer-motion';
import { getImageUrl } from '@/assets/images';

export function FrameSecond() {
  return (
    <div className="z-200 w-full absolute z-300 top-0 h-full">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, display: 'none' }}
        transition={{ duration: 0.4, delay: 0.475 }}
        src={getImageUrl(`frame1badge1`)}
        alt="Badge"
        className="max-w-[50%] lg:max-w-[100%] h-auto absolute -right-[10%] lg:-right-[20%] top-[26%]"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, display: 'none' }}
        transition={{ duration: 0.3, delay: 0.6 }}
        src={getImageUrl(`frame1badge0`)}
        alt="Badge"
        className="max-w-[50%] lg:max-w-[100%] h-auto absolute -left-[10%] lg:-left-[30%] bottom-10"
      />
    </div>
  );
}

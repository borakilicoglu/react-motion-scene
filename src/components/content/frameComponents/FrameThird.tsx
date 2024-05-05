import { motion } from 'framer-motion';
import { getImageUrl } from '@/assets/images';

export function FrameThird() {
  return (
    <div className="w-full absolute z-300 top-0 h-full">
      <motion.img
        initial={{ y: 500, x: '-50%', left: '50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', left: '50%', opacity: 1 }}
        exit={{ opacity: 0, x: '-50%', left: '50%', display: 'none' }}
        transition={{ duration: 0.4, delay: 0.975 }}
        src={getImageUrl(`frame2file0`)}
        alt="Badge"
        className="max-w-[100%] h-auto absolute z-[310] bottom-0"
      />
      <motion.img
        initial={{ y: 500, x: '-50%', left: '50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', left: '50%', opacity: 1 }}
        exit={{ opacity: 0, x: '-50%', left: '50%', display: 'none' }}
        transition={{ duration: 0.4, delay: 0.675 }}
        src={getImageUrl(`frame2file1`)}
        alt="Badge"
        className="max-w-[100%] h-auto absolute z-[309] bottom-[0px]"
      />
      <motion.img
        initial={{ y: 500, x: '-50%', left: '50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', left: '50%', opacity: 1 }}
        exit={{ opacity: 0, x: '-50%', left: '50%', display: 'none' }}
        transition={{ duration: 0.4, delay: 0.375 }}
        src={getImageUrl(`frame2file2`)}
        alt="Badge"
        className="max-w-[100%] h-auto absolute z-[308] bottom-[16px]"
      />
    </div>
  );
}

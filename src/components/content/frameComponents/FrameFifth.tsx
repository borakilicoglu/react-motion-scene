import { motion } from 'framer-motion';
import { getImageUrl } from '@/assets/images';

export function FrameFifth() {
  return (
    <div className="w-full absolute z-300 top-0 h-full">
      <motion.img
        initial={{ y: 500, x: '-50%', left: '50%' }}
        animate={{ y: 0, x: '-130%', left: '50%' }}
        exit={{ y: 500, x: '-50%', left: '50%' }}
        transition={{ duration: 0.4, delay: 0.4 }}
        src={getImageUrl(`frame4file0`)}
        alt="Badge"
        className="max-w-[100%] h-auto absolute bottom-5 z-[310]"
      />
      <motion.img
        initial={{ y: 500, x: '-50%', left: '50%' }}
        animate={{ y: 0, x: '-50%', left: '50%' }}
        exit={{ y: 500, x: '-50%', left: '50%' }}
        transition={{ duration: 0.4, delay: 0.8 }}
        src={getImageUrl(`frame4file1`)}
        alt="Badge"
        className="max-w-[100%] h-auto absolute bottom-[60px] z-[309]"
      />
      <motion.img
        initial={{ y: 500, x: '-50%', left: '50%' }}
        animate={{ y: 0, x: '40%', left: '50%' }}
        exit={{ y: 500, x: '-50%', left: '50%' }}
        transition={{ duration: 0.4, delay: 1.2 }}
        src={getImageUrl(`frame4file2`)}
        alt="Badge"
        className="max-w-[100%] h-auto absolute bottom-5 z-[309]"
      />
    </div>
  );
}

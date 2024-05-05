import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { contents } from '@/utils/data';
import { getImageUrl } from '@/assets/images';
import { frameComponents } from './frameComponents';

function Content({ activeTab }: { activeTab: number }) {
  const [activeContent, setActiveContent] = useState<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  useEffect(() => {
    setShouldAnimate(false); // Set shouldAnimate to false
    setAnimationCompleted(false);
    setTimeout(() => setActiveContent(activeTab), 300);
    setTimeout(() => setShouldAnimate(true), 400); // Set shouldAnimate to true after a short delay
  }, [activeTab]); // Run this effect whenever activeTab changes

  const { title, slug, desc } = contents[activeContent];

  return (
    <div className="flex-grow flex lg:px-32 overflow-hidden flex-col lg:flex-row justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldAnimate ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-full lg:w-1/2 items-end flex justify-center relative px-10 lg:px-0"
      >
        <div className="relative">
          <AnimatePresence>
            {shouldAnimate && (
              <motion.img
                key="frame"
                src={getImageUrl(`frame${activeContent}`)}
                alt="Frame"
                initial={{ y: 500 }}
                animate={{
                  y: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onAnimationComplete={() => setAnimationCompleted(true)}
              />
            )}
          </AnimatePresence>
          {animationCompleted && frameComponents[activeContent]?.()}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldAnimate ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-full lg:w-1/2 items-center lg:items-end flex justify-center flex-col space-y-5 order-first lg:order-last flex-grow"
      >
        <h2 className="text-[16px] font-[800] text-[#0381FF] uppercase leading-[19.09px]">
          {title}
        </h2>
        <h3 className="text-[32px] font-[700] text-[#0B122A] leading-[40px]">
          {slug}
        </h3>
        <h3 className="max-w-[530px] text-[20px] font-[400] tracking-normal leading-[32px] text-[#0B172A] text-center lg:text-end">
          {desc}
        </h3>
        <button className="border px-3 text-[#0B122A] text-[20px] font-[400] w-[135px] h-[54px]">
          Learn More
        </button>
      </motion.div>
    </div>
  );
}

export default Content;

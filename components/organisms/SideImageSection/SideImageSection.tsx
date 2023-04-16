import { useEffect } from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { render } from 'storyblok-rich-text-react-renderer';
import IAsset from '@models/IAsset';
import useThemeStore from '@stores/themeStore';

export interface ISideImageSection extends SbBlokData {
  readonly title: string;
  readonly text: string;
  readonly images: IAsset[];
}

const SideImageSection = ({ blok }: { blok: ISideImageSection }) => {
  const { title, text, images } = blok;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  const theme = useThemeStore((state) => state.theme);

  // console.log(theme);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const leftImageVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, x: -200 },
  };

  const rightImageVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
    hidden: { opacity: 0, x: 200 },
  };

  return (
    <section className="relative w-full" {...storyblokEditable(blok)}>
      <div className="container h-screen text-center flex flex-col items-center justify-center gap-14">
        <h1>{title}</h1>
        <div ref={ref}>{render(text)}</div>
      </div>
      <motion.div
        className="absolute z-10 -top-[150px] -left-[200px] w-[750px] h-[750px]"
        animate={controls}
        initial="hidden"
        variants={leftImageVariants}
      >
        <Image alt={images[0].alt} src={images[0].filename} layout="fill" />
      </motion.div>
      <motion.div
        className="xl:absolute z-10 -top-[150px] -right-[200px] w-[750px] h-[750px]"
        animate={controls}
        initial="hidden"
        variants={rightImageVariants}
      >
        <Image alt={images[1].alt} src={images[1].filename} layout="fill" />
      </motion.div>
    </section>
  );
};

export default SideImageSection;

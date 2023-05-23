import { useEffect } from 'react';
import {
  ISbRichtext,
  renderRichText,
  SbBlokData,
  storyblokEditable,
} from '@storyblok/react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import IAsset from '@models/IAsset';
import DirectionEnum from '@models/enums/DirectionEnum';
import { SbImage } from '@atoms/SbImage/SbImage';
import clsx from 'clsx';
import BackgroundLogo from '@atoms/BackgroundLogo/BackgroundLogo';
import AnimateInOnScroll from '@atoms/AnimateInOnScroll/AnimateInOnScroll';
// import useThemeStore from '@stores/themeStore';

export interface ISideImageSection extends SbBlokData {
  readonly title: string;
  readonly text: ISbRichtext;
  readonly image: IAsset;
  readonly imagePosition: DirectionEnum;
}

const SideImageSection = ({ blok }: { blok: ISideImageSection }) => {
  const { title, text, image, imagePosition } = blok;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  // const theme = useThemeStore((state) => state.theme);

  // console.log(theme);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const imageVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <BackgroundLogo>
      <section
        className="relative w-full grid-container component-padding"
        {...storyblokEditable(blok)}
      >
        <div
          className={clsx(
            imagePosition === DirectionEnum.Left && 'order-last',
            'lg:col-span-4 xl:col-start-2 text-center flex flex-col items-center justify-center gap-14'
          )}
        >
          <h1 className="whitespace-pre-line">{title}</h1>
          <div
            ref={ref}
            dangerouslySetInnerHTML={{ __html: renderRichText(text) }}
          />
        </div>
        <AnimateInOnScroll
          direction={DirectionEnum.Left}
          className={clsx(
            imagePosition === DirectionEnum.Right && 'xl:col-start-7',
            'lg:col-span-4 xl:col-span-6 relative order-0 px-8 md:px-0'
          )}
        >
          <SbImage
            alt={image.alt}
            src={image.filename}
            ratio={1}
            // sizes={`
            // (max-width: 710px) 120px,
            // (max-width: 991px) 193px,
            //   278px`}
          />
        </AnimateInOnScroll>
      </section>
    </BackgroundLogo>
  );
};

export default SideImageSection;

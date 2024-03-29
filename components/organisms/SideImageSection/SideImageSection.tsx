import {
  ISbRichtext,
  renderRichText,
  SbBlokData,
  storyblokEditable,
} from '@storyblok/react';
import IAsset from '@models/IAsset';
import DirectionEnum from '@models/enums/DirectionEnum';
import { SbImage } from '@atoms/SbImage/SbImage';
import clsx from 'clsx';
import AnimateInOnScroll from '@atoms/AnimateInOnScroll/AnimateInOnScroll';
import ILink from '@models/ILink';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@atoms/Button/Button';
import ButtonStyleEnum from '@models/enums/ButtonStyleEnum';

export interface ISideImageSection extends SbBlokData {
  readonly title: string;
  readonly text: ISbRichtext;
  readonly image: IAsset;
  readonly imagePosition: DirectionEnum;
  readonly links: ILink[];
}

const SideImageSection = ({ blok }: { blok: ISideImageSection }) => {
  const { title, text, image, imagePosition, links } = blok;

  const ref = useRef<HTMLUListElement>(null);

  const inView = useInView(ref, { once: true, amount: 0.75 });

  console.log({ imagePosition });

  return (
    <section
      className="relative w-full grid-container component-padding"
      {...storyblokEditable(blok)}
    >
      <div
        className={clsx(
          imagePosition === DirectionEnum.Right
            ? 'xl:col-start-2'
            : 'xl:col-start-8 order-1',
          'xl:col-span-4 text-center flex flex-col items-center justify-center gap-14'
        )}
      >
        <h2 className="whitespace-pre-line text-yellow drop-shadow-black_lg">
          {title}
        </h2>
        <div
          className="body-one"
          dangerouslySetInnerHTML={{ __html: renderRichText(text) }}
        />
      </div>
      <AnimateInOnScroll
        direction={DirectionEnum.Up}
        className={clsx(
          imagePosition === DirectionEnum.Right ? 'xl:col-start-7' : 'order-0',
          'xl:col-span-6 relative px-8 md:px-0 drop-shadow-xl'
        )}
      >
        <SbImage
          alt={image.alt}
          src={image.filename}
          ratio={1}
          sizes={`
            (max-width: 710px) 120px,
            (max-width: 991px) 193px,
              278px`}
        />
      </AnimateInOnScroll>
      <ul
        ref={ref}
        className="col-span-full flex flex-wrap gap-24 mt-12 items-center justify-center order-2"
      >
        {links?.map((link, index) => (
          <motion.li
            key={link.title}
            initial={{ opacity: 0, translateY: 50 }}
            animate={
              inView
                ? { opacity: 1, translateY: 0 }
                : { opacity: 0, translateY: 50 }
            }
            transition={{
              duration: 0.4,
              delay: 0.3 * index,
              ease: [0, 0, 0.32, 1],
            }}
          >
            <Button className="shadow-bold" style_={ButtonStyleEnum.Outline}>
              {link.title}
            </Button>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SideImageSection;

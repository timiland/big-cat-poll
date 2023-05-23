import AnimateInOnScroll from '@atoms/AnimateInOnScroll/AnimateInOnScroll';
import Button from '@atoms/Button/Button';
import { SbImage } from '@atoms/SbImage/SbImage';
import ButtonStyleEnum from '@models/enums/ButtonStyleEnum';
import DirectionEnum from '@models/enums/DirectionEnum';
import IAsset from '@models/IAsset';
import ILink from '@models/ILink';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

export interface ICtaPopOutSection extends SbBlokData {
  readonly title: string;
  readonly text: string;
  readonly image: IAsset;
  readonly link: ILink[];
}

const CtaPopOutSection = ({ blok }: { blok: ICtaPopOutSection }) => {
  const { title, text, image, link } = blok;

  return (
    <section
      className="w-full grid-container component-padding"
      {...storyblokEditable(blok)}
    >
      <div className="xl:col-start-4 xl:col-span-6 bg-black text-white p-20 rounded-2xl relative">
        <div className="flex flex-col justify-start items-start gap-24 w-4/5">
          <h1>{title}</h1>
          {text}
          <AnimateInOnScroll
            className="absolute top-0 -right-[200px] h-[120%] translate-x-1/3"
            direction={DirectionEnum.Down}
          >
            <SbImage
              className="w-full h-full"
              src={image.filename}
              alt={image.alt}
            />
          </AnimateInOnScroll>
          <Button style_={ButtonStyleEnum.Square} link={link[0]} />
        </div>
      </div>
    </section>
  );
};

export default CtaPopOutSection;

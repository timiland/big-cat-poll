import IAsset from '@models/IAsset';
import ITextBlock from '@models/ITextBlock';
import {
  renderRichText,
  SbBlokData,
  storyblokEditable,
} from '@storyblok/react';
import Image from 'next/image';

export interface IBulletSection extends SbBlokData {
  readonly title: string;
  readonly text: string;
  readonly bullets: ITextBlock[];
  readonly image: IAsset;
}

const BulletSection = ({ blok }: { blok: IBulletSection }) => {
  const { bullets, title, text, image } = blok;
  // console.log({ blok });
  return (
    <section className="grid-container" {...storyblokEditable(blok)}>
      <div className="xl:col-span-4 xl:col-start-2">
        <ul className="list-disc flex-col flex gap-8 pl-12">
          {bullets.map((textBlock) => (
            <li
              {...storyblokEditable(textBlock)}
              dangerouslySetInnerHTML={{
                __html: renderRichText(textBlock.text),
              }}
            />
          ))}
        </ul>
      </div>
      <div className="xl:col-span-5 xl:col-start-8">
        <h1 className="whitespace-pre-line">{title}</h1>
        <p>{text}</p>
        {/* <Image
          alt={image?.alt}
          src={image?.filename}
          fill
          className="rounded-full"
        /> */}
      </div>
    </section>
  );
};

export default BulletSection;

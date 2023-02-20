import { SbBlokData } from '@storyblok/react';
import Image from 'next/image';
import IAsset from '../../../models/IImage';
import ILink from '../../../models/ILink';

export interface INavBar extends SbBlokData {
  readonly logo: IAsset;
  readonly links: (ILink | ILink[])[];
  readonly contactCta: string;
}

const NavBar = ({ blok }: { blok: INavBar }) => {
  const { logo } = blok;
  return (
    <nav className="h-24 border-black border-b-4 w-full shadow-xl relative">
      <Image
        className="absolute top-0"
        alt={logo.alt}
        src={logo.filename}
        width={300}
        height={300}
      />
      <ol className="flex gap-8 h-full w-full items-center justify-end p-8">
        <li>Services</li>
        <li>Blog</li>
      </ol>
    </nav>
  );
};

export default NavBar;

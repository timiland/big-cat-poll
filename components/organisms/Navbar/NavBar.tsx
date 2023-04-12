import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@atoms/Button/Button';
import IconSizeEnum from '@models/enums/IconSizeEnum';
import IAsset from '@models/IAsset';
import ILink from '@models/ILink';
import useThemeStore from '@stores/themeStore';
import Icon from '@atoms/Icon/Icon';
import Link from '@atoms/Link/Link';

export interface INavBar extends SbBlokData {
  readonly logo: IAsset;
  readonly linkArray: (ILink | { title: string; links: ILink[] })[];
  readonly contactCta: string;
}

// Type Guard
function isLink(link: ILink | { links: ILink[] }): link is ILink {
  return (link as ILink).url !== undefined;
}

const dropdownVariants: Variants = {
  hidden: { y: '-100%' },
  show: {
    y: '0%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const NavBar = ({ blok }: { blok: INavBar }) => {
  const { logo, linkArray, contactCta } = blok;
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <nav className="component-padding w-full" {...storyblokEditable(blok)}>
      <div className="h-32 flex flex-col shadow-xl relative z-10">
        <Image
          className="absolute z-10 top-6 left-10"
          alt={logo.alt}
          src={logo.filename}
          width={200}
          height={200}
        />
        <button className="bg-red" onClick={() => setTheme('red-yellow')}>
          YAO
        </button>
        <ol className="flex gap-8 h-full w-full items-center justify-end p-8">
          {!!linkArray?.length &&
            linkArray.map((linkItem, index: number) => {
              if (isLink(linkItem)) {
                return (
                  <li {...storyblokEditable(linkItem)} key={linkItem.title}>
                    <Button
                      secondary
                      link={{
                        title: linkItem.title,
                        url: linkItem.url,
                        target: linkItem.target,
                      }}
                    />
                  </li>
                );
              }
              return (
                <li {...storyblokEditable(linkItem)}>
                  <Button
                    secondary
                    onClick={() => {
                      if (activeDropdownIndex === index && showDropdown) {
                        setShowDropdown(false);
                      }
                      if (activeDropdownIndex !== index && showDropdown) {
                        setActiveDropdownIndex(index);
                      } else {
                        setShowDropdown(true);
                      }
                    }}
                  >
                    {linkItem.title}
                    <Icon
                      name="sort-desc"
                      size={IconSizeEnum.md}
                      className="ml-1 mb-3"
                    />
                  </Button>
                </li>
              );
            })}
          {contactCta && (
            <Button {...storyblokEditable(blok)}>{contactCta}</Button>
          )}
        </ol>
        <div className="w-full bg-black h-1" />
        <div className="absolute top-full left-0 w-full h-[200px] overflow-hidden">
          <AnimatePresence>
            {showDropdown && (
              <motion.ol
                // key={activeDropdownIndex}
                variants={dropdownVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="bg-black w-full text-white flex justify-end items-center p-9 gap-8 shadow-xl"
              >
                {!!linkArray[activeDropdownIndex]?.links?.length &&
                  linkArray[activeDropdownIndex]?.links?.map((link: ILink) => (
                    <motion.li key={link.title} variants={itemVariants}>
                      <Link target="_self" href="/">
                        {link.title}
                      </Link>
                    </motion.li>
                  ))}
              </motion.ol>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

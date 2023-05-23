import '../styles/globals.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { Urbanist } from '@next/font/google';
import CharacterAnimationHero from '@organisms/CharacterAnimationHero/CharacterAnimationHero';
import BulletSection from '@organisms/BulletSection/BulletSection';
import CtaPopOutSection from '@organisms/CtaPopOutSection/CtaPopOutSection';
import NavBar from '../components/organisms/Navbar/NavBar';
import Page from '../components/templates/Page';
import SideImageSection from '../components/organisms/SideImageSection/SideImageSection';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

const components = {
  navBar: NavBar,
  page: Page,
  bulletSection: BulletSection,
  sideImageSection: SideImageSection,
  characterAnimationHero: CharacterAnimationHero,
  ctaPopOutSection: CtaPopOutSection,
};

storyblokInit({
  accessToken: 'Wj6QZWp7UZrenZ8U6nawJAtt',
  use: [apiPlugin],
  components,
});

// get correct typing on this
function MyApp({ Component, pageProps }: any) {
  return (
    <div className={`${urbanist.variable} font-urbanist`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

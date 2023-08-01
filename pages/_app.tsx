/* eslint-disable camelcase */
import '../styles/index.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import {
  Urbanist,
  Poppins,
  Archivo,
  Archivo_Black,
  Sarabun,
  Questrial,
} from '@next/font/google';
// import CharacterAnimationHero from '@organisms/CharacterAnimationHero/CharacterAnimationHero';
import BulletSection from '@organisms/BulletSection/BulletSection';
import CtaPopOutSection from '@organisms/CtaPopOutSection/CtaPopOutSection';
import ProjectFeature from '@organisms/ProjectFeature/ProjectFeature';
import PopOutTextHero from '@organisms/PopOutTextHero/PopOutTextHero';
import Footer from '@organisms/Footer/Footer';
import dynamic from 'next/dynamic';
import ContactFormSection from '@organisms/ContactFormSection/ContactFormSection';
import BasicHero from '@organisms/BasicHero/BasicHero';
import Project from '@templates/Project';
import Accordion from 'components/molecules/Accordion/Accordion';
import TextHightlightSection from '@organisms/TextHightlightSection/TextHightlightSection';
import NavBar from '../components/organisms/Navbar/NavBar';
import Page from '../components/templates/Page';
import SideImageSection from '../components/organisms/SideImageSection/SideImageSection';

const CharacterAnimationHero = dynamic(
  () => import('@organisms/CharacterAnimationHero/CharacterAnimationHero'),
  {
    ssr: false,
  }
);

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
});

const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-questrial',
});

const sarabun = Sarabun({
  weight: ['200', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-sarabun',
});

const archivoBlack = Archivo_Black({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-archivo_black',
});

const components = {
  bulletSection: BulletSection,
  basicHero: BasicHero,
  characterAnimationHero: CharacterAnimationHero,
  contactFormSection: ContactFormSection,
  ctaPopOutSection: CtaPopOutSection,
  footer: Footer,
  navBar: NavBar,
  page: Page,
  accordion: Accordion,
  project: Project,
  popOutTextHero: PopOutTextHero,
  projectFeature: ProjectFeature,
  sideImageSection: SideImageSection,
  textHighlightSection: TextHightlightSection,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

// get correct typing on this
function MyApp({ Component, pageProps }: any) {
  return (
    <div
      className={`${urbanist.variable} ${archivoBlack.variable} ${poppins.variable} ${questrial.variable} ${sarabun.variable} ${archivo.variable} font-poppins bg-green text-white`}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

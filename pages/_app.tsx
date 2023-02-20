import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { Urbanist } from '@next/font/google';
import NavBar from '../components/organisms/Navbar/NavBar';
import Page from '../components/Templates/Page';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

const components = {
  navBar: NavBar,
  page: Page,
};

storyblokInit({
  accessToken: 'Wj6QZWp7UZrenZ8U6nawJAtt',
  use: [apiPlugin],
  components,
});

// get correct typing on this
function MyApp({ Component, pageProps }: any) {
  return (
    <div className={`${urbanist.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import BackgroundLogo from '@atoms/BackgroundLogo/BackgroundLogo';
import ColoursEnum from '@models/enums/ColoursEnum';
import { INavBar } from '@models/INavBar';
import ISiteConfig from '@models/ISiteConfig';
import Footer, { IFooter } from '@organisms/Footer/Footer';
import NavBar from '@organisms/Navbar/NavBar';
import getSiteConfig from '@services/getSiteConfig';
import { getPaths, getStories } from '@services/storyblok';
import { ConfigProvider } from '@stores/configProvider';
import {
  StoryblokComponent,
  ISbStoryData,
  useStoryblokState,
} from '@storyblok/react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';

// interface Props {
//   readonly story?: ISbStoryData & { path: string };
// }

const Page = ({
  config,
  story,
}: {
  config: ISiteConfig;
  story: ISbStoryData;
}) => {
  // eslint-disable-next-line no-param-reassign
  story = useStoryblokState(story);

  const { navBar, footer } = config;

  if (!story.content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen">
      <Head>
        <title>Timothy Iland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider config={config}>
        <NavBar blok={navBar as INavBar} />
        <BackgroundLogo colour={ColoursEnum.Black} />
        <div className="relative z-10 pt-[250px]">
          <StoryblokComponent blok={story.content} />
        </div>
        <Footer blok={footer as IFooter} />
        <div className="fixed top-0 z-20" id="modal-root" />
      </ConfigProvider>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
}: GetStaticPropsContext) => {
  const { data } = await getStories({ params, preview: !!preview });

  console.log(params?.slug, { data });

  if (!data?.story) {
    return {
      notFound: true,
    };
  }

  const config = await getSiteConfig();

  return {
    props: {
      config,
      preview: !!preview,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
};

export default Page;

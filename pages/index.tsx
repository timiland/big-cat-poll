import Head from 'next/head';
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStoriesParams,
  ISbStoryData,
} from '@storyblok/react';

export default function Home({ story }: { story: ISbStoryData }) {
  // eslint-disable-next-line no-param-reassign
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>Timothy Iland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  const slug = 'home';

  const sbParams = {
    version: 'draft', // or 'published'
  } as ISbStoriesParams;

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

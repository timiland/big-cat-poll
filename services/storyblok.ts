import { getStoryblokApi, ISbResult, ISbStoryParams } from '@storyblok/react';
import { ParsedUrlQuery } from 'querystring';

export const getStories = async ({
  params,
  preview,
}: {
  params: ParsedUrlQuery | undefined;
  preview: boolean;
}): Promise<ISbResult> => {
  const relations: string[] = [];

  const slug = params?.slug ? (params.slug as string[]).join('/') : '';

  const sbParams: ISbStoryParams = {
    version: 'published',
    resolve_links: 'story',
    resolve_relations: relations.join(','),
  };

  if (preview) {
    sbParams.version = 'draft';
    sbParams.cv = Date.now();
  }

  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return response;
};

export const getPaths = async (): Promise<{ params: { slug: string[] } }[]> => {
  const sbParams: ISbStoryParams = {
    version: 'published',
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get('cdn/links/', sbParams);

  const paths: { params: { slug: string[] } }[] = [];

  Object.keys(data.links).forEach((linkKey: string) => {
    // Dan does this to remove certain pages
    //   if (
    //     data.links[linkKey].is_folder ||
    //     data.links[linkKey].slug.startsWith('core/') ||
    //     data.links[linkKey].slug.startsWith('domain/')
    //   ) {
    //     return;
    //   }

    const { path } = data.links[linkKey];
    const splitSlug = path.split('/');

    paths.push({ params: { slug: splitSlug } });
  });

  return paths;
};

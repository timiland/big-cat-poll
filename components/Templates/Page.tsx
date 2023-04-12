import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} className="flex flex-col items-center">
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;

import sanityClient from '@sanity/client';
export const client = sanityClient({
  projectId: 'x3vw6vn3',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
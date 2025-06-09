import { getCollection, type CollectionEntry, type CollectionKey } from "astro:content";


export const getContentByLocale = async <T extends CollectionKey>(
  locale: string | undefined,
  collectionName: T
): Promise<CollectionEntry<T>[]> => {
  const allTinaItems = await getCollection(collectionName);
  const localeItems = allTinaItems.filter((item) =>
    item.data.tinaInfo.relativePath.startsWith(locale || 'en')
  );
  return localeItems;
};


// localeItems fetched by getCollection 
const localeItems = [
  {
    id: 'en/first-post',
    data: {
      tinaInfo: {
        filename: 'first-post',
        basename: 'first-post.mdx',
        path: 'src/content/blog/en/first-post.mdx',
        relativePath: 'en/first-post.mdx'
      },
      title: 'First post',
      description: 'Lorem ipsum dolor sit amet',
      pubDate: new Date('2022-07-07T14:00:00.000Z'),
      updatedDate: new Date('1970-01-01T00:00:00.000Z'),
      heroImage: '/blog-placeholder-3.jpg'
    },
    collection: 'blog'
  },
  {
    id: 'en/second-post',
    data: {
      tinaInfo:  {
        filename: 'second-post',
        basename: 'second-post.mdx',
        path: 'src/content/blog/en/second-post.mdx',
        relativePath: 'en/second-post.mdx'
      },
      title: 'Second post',
      description: 'Lorem ipsum dolor sit amet',
      pubDate: new Date('2022-07-14T16:00:00.000Z'),
      updatedDate: new Date('1970-01-01T00:00:00.000Z'),
      heroImage: '/blog-placeholder-4.jpg'
    },
    collection: 'blog'
  }
]

// localeItemsWithTinaData fetched by client.queries[collectionName] 
const localeItemsWithTinaData = [
  {
    _sys: {
      filename: 'first-post',
      basename: 'first-post.mdx',
      hasReferences: false,
      breadcrumbs: [Array],
      path: 'src/content/blog/en/first-post.mdx',
      relativePath: 'en/first-post.mdx',
      extension: '.mdx'
    },
    id: 'src/content/blog/en/first-post.mdx',
    __typename: 'Blog',
    title: 'First post',
    description: 'Lorem ipsum dolor sit amet',
    pubDate: '2022-07-07T14:00:00.000Z',
    updatedDate: null,
    heroImage: '/blog-placeholder-3.jpg',
    body: { type: 'root', children: [Array] }
  },
  {
    _sys: {
      filename: 'second-post',
      basename: 'second-post.mdx',
      hasReferences: false,
      breadcrumbs: [Array],
      path: 'src/content/blog/en/second-post.mdx',
      relativePath: 'en/second-post.mdx',
      extension: '.mdx'
    },
    id: 'src/content/blog/en/second-post.mdx',
    __typename: 'Blog',
    title: 'Second post',
    description: 'Lorem ipsum dolor sit amet',
    pubDate: 'Jul 15 2022',
    updatedDate: null,
    heroImage: '/blog-placeholder-4.jpg',
    body: { type: 'root', children: [Array] }
  }
]

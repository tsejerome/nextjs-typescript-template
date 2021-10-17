import { MetaTagKeys } from '../components/Shared/DocumentHead';
import { UserInfo } from '../models/User';

interface MetaTag {
  property: string;
  key?: string;
  content: string;
}

interface MetaTagInfo {
  title: string;
  description: string;
  imageUrl: string;
  fallbackImageUrl: string;
}

const populateMetaTagsList = (
  { title, description, imageUrl, fallbackImageUrl }: MetaTagInfo,
  url: string
): MetaTag[] => {
  return [
    {
      property: MetaTagKeys.TITLE,
      key: MetaTagKeys.META_TITLE,
      content: title,
    },
    { property: MetaTagKeys.DESCRIPTION, content: description },
    { property: MetaTagKeys.OG_URL, content: url },
    { property: MetaTagKeys.OG_TITLE, content: title },
    { property: MetaTagKeys.OG_DESC, content: description },
    { property: MetaTagKeys.OG_IMG, content: fallbackImageUrl },
    { property: MetaTagKeys.OG_IMG, content: imageUrl },
    { property: MetaTagKeys.TWITTER_CARD, content: 'summary_large_image' },
    { property: MetaTagKeys.TWITTER_URL, content: url },
    { property: MetaTagKeys.TWITTER_TITLE, content: title },
    { property: MetaTagKeys.TWITTER_DESC, content: description },
    { property: MetaTagKeys.TWITTER_IMG, content: fallbackImageUrl },
    { property: MetaTagKeys.TWITTER_IMG, content: imageUrl },
  ];
};

export {
  populateMetaTagsList,
};
export type { MetaTag };

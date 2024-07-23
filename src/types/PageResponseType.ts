/* eslint-disable @typescript-eslint/no-unused-vars */
interface PageResponse {
  navigation: Navigation;
  page: Page;
}

interface Navigation {
  nodes: NavNode[];
}

interface Page {
  id: number;
  contentId: string;
  properties: Property[];
}

interface NavNode {
  id: number;
  name: string;
  properties: Property[];
}

interface Property {
  value: PropertyValue;
}

interface ContentProperty {
  alias?: string;
  value: PropertyValue;
}

interface PropertyValue {
  alias?: string;
  blocks?: Block[];
  value?: string | string[];
  sourceValue?: string;
  links?: Link[];
  mediaItems?: MediaItem[];
}

interface Block {
  contentAlias?: string;
  contentProperties?: ContentProperty[];
}

interface MediaItem {
  id: number;
  url: string;
  altText?: string;
}

interface Link {
  name: string;
  target?: string | null;
  type: string;
  url: string;
}

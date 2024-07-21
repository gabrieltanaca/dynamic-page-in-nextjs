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
  contentProperties?: Property[];
}

interface MediaItem {
  id: number;
  url: string;
}

interface Link {
  name: string;
  target?: string | null;
  type: string;
  url: string;
}

export const getNodePropertiesByAlias = (navigation: Navigation, alias: string): Property[] => {
  return navigation.nodes.flatMap(nav =>
    nav.properties
      .flatMap(prop => {
        if (prop.value.alias === alias) return prop;
      })
      .filter(prop => !!prop)
  );
};

export const getMediaItemsByAlias = (
  properties: ContentProperty[],
  alias: string = 'image',
  altAlias: string = 'altText'
) => {
  const mediaItem = properties.find(prop => prop.alias === alias)?.value.mediaItems?.[0];
  const altText = properties.find(prop => prop.alias === altAlias)?.value.value;

  return { ...mediaItem, altText };
};

export const filterPropertiesByAlias = (
  properties: ContentProperty[],
  filterAlias: string[] = ['image', 'altText', 'socialLoginOptions']
) => {
  const newArray = properties.filter(x => !!x.alias && !filterAlias.includes(x.alias));
  return newArray;
};

export const orderPropertiesByAlias = (properties: Property[], orderAlias: string[]) => {
  return properties.sort((a, b) => {
    const aliasA = a.value.alias || '';
    const aliasB = b.value.alias || '';

    const indexA = orderAlias.indexOf(aliasA);
    const indexB = orderAlias.indexOf(aliasB);

    const finalIndexA = indexA === -1 ? orderAlias.length : indexA;
    const finalIndexB = indexB === -1 ? orderAlias.length : indexB;

    return finalIndexA - finalIndexB;
  });
};

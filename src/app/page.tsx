import Navigation from '@/components/Navigation';
import PageLayout from '@/components/PageLayout';
import { getNodePropertiesByAlias, orderPropertiesByAlias } from '@/utils/dynamicPageUtils';

export default async function Home() {
  const { navigation, page } = (await (
    await fetch('http://localhost:3000/api/page')
  ).json()) as PageResponse;

  const headers = getNodePropertiesByAlias(navigation, 'headers');
  const footers = getNodePropertiesByAlias(navigation, 'footers');

  const pageProperties = orderPropertiesByAlias(page.properties, ['hero', 'sections']);

  return (
    <div className="bg-white text-fontDark">
      <header id="navigation">
        {headers.map(prop => {
          return <Navigation {...prop} />;
        })}
      </header>
      <div id="page">
        {pageProperties.map(prop => {
          return <PageLayout {...prop} />;
        })}
      </div>
      <footer>
        {footers.map(prop => {
          return <Navigation {...prop} />;
        })}
      </footer>
    </div>
  );
}

import Navigation from '@/components/Navigation';
import PageLayout from '@/components/PageLayout';

export default async function Home() {
  const { navigation, page } = (await (
    await fetch('http://localhost:3000/api/page')
  ).json()) as PageResponse;

  return (
    <>
      <div
        id="navigation"
        className="bg-white"
      >
        {navigation.nodes.map(nav =>
          nav.properties.map(prop => {
            return <Navigation {...prop} />;
          })
        )}
      </div>
      <div id="page">
        {page.properties.map(prop => {
          return <PageLayout {...prop} />;
        })}
      </div>
    </>
  );
}

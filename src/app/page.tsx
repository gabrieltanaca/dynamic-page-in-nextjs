import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

export default async function Home() {
  const { navigation, page } = (await (
    await fetch('http://localhost:3000/api/page')
  ).json()) as PageResponse;

  return (
    <>
      <div id="navigation"></div>
      <div id="page"></div>
    </>
  );
}


import Hero from "../../components/hero/Hero";
import MainContent from './MainContent';

function Home() {
 
  return (
    <main className="flex flex-col bg-gray-200 min-h-screen">
      <Hero />
      <MainContent  />
    </main>
  );
}

export default Home;

import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Quality from '../components/Quality';
import Facade from '../components/Facade';
import Process from '../components/Process';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Calculator />
      <Quality />
      <Facade />
      <Process />
      <FooterCTA />
    </main>
  );
}

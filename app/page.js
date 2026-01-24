import Header from '../components/Header';
import Hero from '../components/Hero';
import BuildingView from '../components/BuildingView';
import CostCalculator from '../components/CostCalculator';
import BrandStrip from '../components/BrandStrip';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BrandStrip />
      <BuildingView />
      <CostCalculator />
    </>
  );
}

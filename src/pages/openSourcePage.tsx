import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import OpenSourceEvents from '../components/OpenSourceEvents/OpenSourceEvents';
import './openSourcePage.css';

const OpenSourcePage = () => {
  return (
    <>
      <Header />
      <main className="open-source-page">
        <div className="open-source-page-bg-gradient">
          <img src="/Components/Gradient.svg" alt="" aria-hidden="true" />
        </div>
        <OpenSourceEvents />
      </main>
      <Footer />
    </>
  );
};

export default OpenSourcePage;
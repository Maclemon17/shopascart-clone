import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Stores from './components/Stores';
import Tag from './components/Tag';
import HowItWorks from './components/HowItWorks';
import DownloadApp from './components/DownloadApp';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<NavBar />
			<Hero />
			<Stores />
			<Tag />
			<HowItWorks />
			<DownloadApp />
			<Pricing />
			<Faq />
			<Footer />
		</div>
	);
}

export default App;

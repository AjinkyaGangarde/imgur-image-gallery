//ximport {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';

//import pages and component 
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className='bg-gradient-to-b from-gray-200 to-gray-500'>
        <div className='flex flex-col justify-between'>
          <Navbar />
          <Home/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

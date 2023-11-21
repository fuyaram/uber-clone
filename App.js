import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ErrorBoundary from './ErrorBoundary'
import Home2 from './Home2';
import Home3 from './Home3';

import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import Home7 from './Home7';
function App() {
  return (
    <>
   <ErrorBoundary>
   <Navbar />
<Home />
<Home2 />
<Home3 />
<Home4 />
<Home5 />
<Home6 />
<Home7 />
<Footer />
   </ErrorBoundary>
    
    
    </>
  );
}

export default App;

import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Statistics from './Components/Statistics';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';
import UrlList from './Components/UrlList';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <CallToAction />
      <Footer />
      {/*<UrlList />*/}
    </>
  )
}

export default App;

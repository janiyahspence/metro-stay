import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Rooms } from './components/sections/Rooms';
import { Meetings } from './components/sections/Meetings';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Location } from './components/sections/Location';
import { Gallery } from './components/sections/Gallery';
import { FAQ } from './components/sections/FAQ';
import { Policies } from './components/sections/Policies';
import { Careers } from './components/sections/Careers';
import { Blog } from './components/sections/Blog';
import { Testimonials } from './components/sections/Testimonials';
import { SpecialOffers } from './components/sections/SpecialOffers';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Rooms />
        <Meetings />
        <Services />
        <About />
        <Location />
        <Gallery />
        <Testimonials />
        <Blog />
        <SpecialOffers />
        <FAQ />
        <Policies />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
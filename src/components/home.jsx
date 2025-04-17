import React, { useState } from 'react';
import SmoothScroll from 'smooth-scroll';

import { Download } from './download';
import { Navigation } from './navigation';
import { Header } from './header';
import { About } from './about';
import { Features } from './features';
import { Footer } from './footer';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navigation />
      <Header data={data.Header} />
      <About data={data.About} />
      <Features data={data.Features} />
      <Download data={data.Features} />
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Home;

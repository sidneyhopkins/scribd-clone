import React from 'react';
// import { Counter } from './features/counter/Counter';
import './Sass/global.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Navbar />
      <Banner />
    </Layout>
  );
}

export default App;

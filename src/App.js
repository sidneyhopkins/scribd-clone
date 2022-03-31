import React from 'react';
// import { Counter } from './features/counter/Counter';
import './Sass/global.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Layout from './components/Layout';
import Subscription from './components/Subscription';
import SeeWhy from './components/SeeWhy';
import Quote from './components/Quote';
import Books from './components/Books';
import Press from './components/Press';
import Footer from './components/Footer';
import QuickNav from './components/QuickNav';
import Popup from './components/Popup';

function App() {
  return (
    <Layout>
      <Popup/>
      <Navbar />
      <Banner />
      <Subscription/>
      <SeeWhy/>
      <Quote/>
      <Books/>
      <Press/>
      <Footer/>
      <QuickNav/>
    </Layout>
  );
}

export default App;

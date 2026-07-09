import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import TargetedSolutions from '../components/TargetedSolutions';
import BestSellers from '../components/BestSellers';
import ExpertRecommendations from '../components/ExpertRecommendations';
import LimitedEdition from '../components/LimitedEdition';
import WallOfPrestige from '../components/WallOfPrestige';
import CorporateSupply from '../components/CorporateSupply';
import WordsOfAcclaim from '../components/WordsOfAcclaim'; // Import Here

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <TargetedSolutions />
      <BestSellers />
      <ExpertRecommendations />
      <LimitedEdition />
      <WallOfPrestige />
      <CorporateSupply />
      <WordsOfAcclaim /> {/* Appended elegantly here */}
    </>
  );
};

export default Home;
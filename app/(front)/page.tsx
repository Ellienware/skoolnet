import { DashBoardPreview } from '@/components/frontend/dashboard-preview';
import GridFeatures from '@/components/frontend/grid-features';
import HeroSection from '@/components/frontend/here-section';
import LogoCloud from '@/components/frontend/logo-cloud';
import Pricing from '@/components/frontend/pricing-section';
import FeatureTabs from '@/components/frontend/tabbed-features';
import React from 'react';

const home = () => {
  return (
    <main>
      <HeroSection />
      <LogoCloud />
      <DashBoardPreview/>
      <GridFeatures/>
      <FeatureTabs/>
      <Pricing/>
    </main>
  )
}

export default home;
